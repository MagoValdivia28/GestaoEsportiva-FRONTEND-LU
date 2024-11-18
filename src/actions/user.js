"use server";

import axios from "axios"
const api = process.env.EXPO_PUBLIC_API_URL;


export const signIn = async (name, password) => {
    try {
        const url = `${api}/users/login`;
        const response = await axios.post(url, {
            name,
            password
        });
        if (response.data.token) {
            localStorage.setItem('@token', JSON.stringify(response.data.token));
        }
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            return error;
        }
    }
}
