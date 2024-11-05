"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { noKopyApi } from "@/lib/api";
import { recoverInformations } from "@/utils/auth";

export type UserProps = {
  id: string;
  name: string;
  email: string;
  company: string;
  instagram: string;
  personType: string;
  identification: string;
  country: string;
  role: "ADMIN" | "USER";
};

type LoginInfo = {
  email: string;
  identification: string;
};

export type AuthContextProps = {
  user: UserProps;
  signIn: (userInfo: LoginInfo) => Promise<void>;
  isAuthenticated: boolean;
};

type ContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthConextProvider({ children }: ContextProviderProps) {
  const [user, setUser] = useState({} as UserProps);
  const isAuthenticated = !!user.name;

  // Sign in function
  const signIn = async ({ email, identification }: LoginInfo) => {
    if (email.length === 0 || identification.length === 0) {
      return;
    }

    try {
      const request = await noKopyApi.post("/client/signin", {
        email,
        identification,
      });

      if (!request.data) {
        console.error(request.status);
      }
      
      setCookie(undefined, "nokopy.token", request.data.token, {
        maxAge: 7 * 86400,
      })

      noKopyApi.defaults.headers["Authorization"] = `Bearer ${request.data.token}`;
      
      setUser(request.data.user);
    } catch (err) {
      console.error(err);
    }
  };

  // Context's lifecycle
  useEffect(() => {
    const { "nokopy.token": token } = parseCookies();

    if (token) {
      recoverInformations(token).then((data) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
