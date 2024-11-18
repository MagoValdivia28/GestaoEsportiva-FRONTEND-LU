"use client"
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from "react";
import { signIn, refresh } from '@/src/actions/user';
import { getAPI } from "../actions/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [acessToken, setAcessToken] = useState(null);
    const [user, setUser] = useState({});
    const [globalLoading, setGlobalLoading] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState(null);

    useEffect(() => {
        const loadingStoreData = async () => {
            setGlobalLoading(true);
            const storageToken = localStorage.getItem('@refresh_token');
            if (storageToken) {
                try {
                    const isLogged = await refresh(JSON.parse(storageToken).id);
                    
                    if (isLogged) {
                        const userById = await getAPI('users/', isLogged.user_id);
                        setAcessToken(isLogged.token);
                        const { senha, ...userData } = userById.user;
                        setUser(userData);
                    }
                } catch (error) {
                    setPopUpMessage("Faça login novamente!");
                    setTimeout(() => {
                        setPopUpMessage(null);
                    }, 3000);
                    localStorage.clear();
                }
            } else {
                localStorage.clear();
                router.push('/login');
            }
            setGlobalLoading(false);
        };
        loadingStoreData();
    }, []);

    const login = async (name, password) => {
        const response = await signIn(name, password);
        if (response.status == "sucess") {
            const { senha, ...userData } = response.user;
            setUser(userData);
            setAcessToken(response.token);
            
            localStorage.setItem('@refresh_token', JSON.stringify(response.refreshToken));
        }
        return response;
    };

    const getRefreshToken = () => {
        return JSON.parse(localStorage.getItem('@refresh_token'));
    };

    return (
        <AuthContext.Provider value={{ acessToken, login, user, setUser, popUpMessage, getRefreshToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;