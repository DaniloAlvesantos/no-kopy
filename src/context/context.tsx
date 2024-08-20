import { createContext, ReactNode, useState } from "react";
import { setCookie } from "nookies";

type UserProps = | {
    name: string;
    email: string;
    instagram: string;
    personType: string;
    identification: string;
}

interface LoginInfo {
    email:string;
}

interface ContextProps {
    user: UserProps;
    signIn: (userInfo: LoginInfo) => Promise<void>;
}

interface ContextProviderProps {
    children: ReactNode;
}

export const ContextRoot = createContext({} as ContextProps);

export function ContextProvider({ children }: ContextProviderProps) {
    const [user, setUser] = useState({} as UserProps);

    const signIn = async ({ email }: LoginInfo) => {
        
    }

    return (
        <ContextRoot.Provider value={{ user, signIn }}>
            {children}
        </ContextRoot.Provider>
    )
}