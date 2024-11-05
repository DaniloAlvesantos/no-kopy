import { useContext } from "react";
import { AuthContextProps, AuthContext } from "@/context/authContext"

export function useAuth():AuthContextProps {
    const useAuth = useContext(AuthContext);

    return useAuth;
}