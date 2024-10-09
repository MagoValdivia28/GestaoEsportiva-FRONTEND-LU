"use client"
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const api = process.env.EXPO_PUBLIC_API_URL;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
        

    const signIn = async (nameParams, passwordParams) => {
        setLoading(true);
        try {
            const response = await axios.post(`${api}/users/login`, {
                nome: nameParams,
                senha: passwordParams
            });
            console.log(response.data);
            // const { password, ...userWithoutPassword } = response.data;   
            // setUser(userWithoutPassword); 
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;