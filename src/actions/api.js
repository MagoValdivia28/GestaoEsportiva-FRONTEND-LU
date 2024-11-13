"use server";

import axios from "axios"
const api = process.env.EXPO_PUBLIC_API_URL;

export const getAPI = async (path, id, query) => {
    try {
        const url = `${api}/${path}${id ? id : ''}?${new URLSearchParams(query).toString()}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            return error;
        }
    }
};

console.log(api);


export const createCampeonato = async (nameParams, dateStartsParams, dateEndsParams) => {
    try {
        const response = await axios.post(`${api}/campeonatos`, {
            titulo: nameParams,
            data_inicio: dateStartsParams,
            data_final: dateEndsParams
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

export const createModalidade = async (nameParams, descParams, limitParams, campeonato_idParams, valueParams, typeParams) => {
    try {
        const response = await axios.post(`${api}/modalidades`, {
            nome: nameParams,
            descricao: descParams,
            limite_pessoas: limitParams,
            campeonato_id: campeonato_idParams,
            valor_por_pessoa: valueParams,
            tipo: typeParams
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

export const createEquipe = async (nameParams, salaParams, modalidade_idParams, statusParams) => {
    try {
        const response = await axios.post(`${api}/times`, {
            nome: nameParams,
            sala: salaParams,
            modalidade_id: modalidade_idParams,
            status: statusParams
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

export const createJogador = async (nameParams, salaParams, time_idParams) => {
    try {
        const response = await axios.post(`${api}/jogadores`, {
            nome: nameParams,
            sala: salaParams,
            time_id: time_idParams
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

export const getCampeonatoByDate = async (dateParams) => {
    try {
        const response = await axios.get(`${api}/campeonatos/date/${dateParams}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            return error;
        }
    }
};


export const updateFeedback = async (id, resposta) => {
    try {
        const response = await axios.put(`${api}/feedback/${id}`, { resposta });
        console.log("Resposta enviada com sucesso:", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar feedback:", error);
        if (error.response) {
            console.error("Detalhes do erro:", error.response.data);
            return error.response.data;
        } else {
            console.error("Erro de conexão:", error.message);
            return { status: "error", message: error.message };
        }
    }
};
