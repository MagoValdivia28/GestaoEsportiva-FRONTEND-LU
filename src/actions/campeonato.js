"use server";

import axios from "axios"
const api = process.env.EXPO_PUBLIC_API_URL;

export const createCampeonato = async (nameParams, dateStartsParams, dateEndsParams) => {
    try {
        const response = await axios.post(`${api}/campeonatos`, {
            titulo: nameParams,
            data_inicio: dateStartsParams,
            data_final: dateEndsParams
        });
        return response.data;
    } catch (error) {
        if(error.response){
            return error.response.data;
        } else {
            return error;
        }
    }
}