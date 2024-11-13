"use client"
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { signIn } from '@/src/actions/user';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const apiURL = process.env.EXPO_PUBLIC_API_URL;
    const [acessToken, setAcessToken] = useState('');
    const [user, setUser] = useState('');
    const [globalLoading, setGlobalLoading] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState(null);

    useEffect(() => {
        const loadingStoreData = async () => {
            setGlobalLoading(true);
            const storageToken = localStorage.getItem('@token');

            if (storageToken) {
                try {
                    const isLogged = await axios.post(`${apiURL}/users/refresh`, {
                        refreshToken: JSON.parse(storageToken)
                    });
                    if (isLogged) {
                        const userById = await axios.get(`${apiURL}/users/${isLogged.data.id}`, {
                            headers: {
                                Authorization: `Bearer ${isLogged.data.token}`
                            }
                        });
                        setAcessToken(isLogged.data.token);
                        const { password, ...userData } = userById.data;
                        setUser(userData);
                    }
                } catch (error) {
                    setPopUpMessage("Faça login novamente!");
                    setTimeout(() => {
                        setPopUpMessage(null);
                    }, 3000);
                    localStorage.clear();
                }
            }
            setGlobalLoading(false);
        };
        loadingStoreData();
    }, []);

    const signIn = async (name, password) => {
        const isLogged = await axios.post(`${apiURL}/users/login`, {
            name: name,
            password: password
        });
        if (isLogged) {
            setAcessToken(isLogged.data.token);
            const { password, ...userData } = isLogged.data.user;
            setUser(userData);
            localStorage.setItem('@token', JSON.stringify(isLogged.data.refreshToken.id));
        }
    }

    return (
        <AuthContext.Provider value={{  loading, acessToken, signIn, user, setUser, }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;