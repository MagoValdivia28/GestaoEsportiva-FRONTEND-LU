"use client"
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { signIn } from '@/src/actions/user';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [acessToken, setAcessToken] = useState(null);


    const signInContext = async (nameParams, passwordParams) => {
        setLoading(true);
        const response = await signIn(nameParams, passwordParams);
        setLoading(false);
        if (response) {
            setUser(response.user);
            setAcessToken(response.token);
        }
        return response;
    };

    return (
        <AuthContext.Provider value={{ signInContext, loading, user, acessToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;