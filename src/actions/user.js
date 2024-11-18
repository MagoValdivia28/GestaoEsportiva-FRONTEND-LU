"use server";

import axios from "axios"
const api = process.env.EXPO_PUBLIC_API_URL;


export const signIn = async (name, password) => {
    try {
        const url = `${api}/users/login`;
        const response = await axios.post(url, {
            nome: name,
            senha: password
        });
        // if (response.data.token) {
        //     localStorage.setItem('@token', JSON.stringify(response.data.token));
        // }
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            return error;
        }
    }
}

export const refresh = async (refreshToken) => {
    try {
        const url = `${api}/users/refresh`;
        const response = await axios.post(url, {
            refreshToken: refreshToken
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            return error;
        }
    }
};

export const logout = async (refreshToken) => {
    try {
        const response = await axios.delete(`${api}/users/logout/${refreshToken}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            return error;
        }
    }
};