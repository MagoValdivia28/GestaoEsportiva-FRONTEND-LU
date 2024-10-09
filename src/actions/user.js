"use server";

import axios from "axios"
const api = process.env.EXPO_PUBLIC_API_URL;

export const signIn = async (nameParams, passwordParams) => {
    try {
        const response = await axios.post(`${api}/users/login`, {
            nome: nameParams,
            senha: passwordParams
        });
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}