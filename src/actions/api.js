"use server";

import axios from "axios";
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

export const createCampeonato = async (nameParams, dateStartsParams, dateEndsParams, acessToken) => {
    try {
        const response = await axios.post(`${api}/campeonatos`, {
            titulo: nameParams,
            data_inicio: dateStartsParams,
            data_final: dateEndsParams
        }, {
            headers: {
                'Authorization': `Bearer ${acessToken}`
            }
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

export const createModalidade = async (nameParams, descParams, limitParams, campeonato_idParams, valueParams, typeParams, acessToken) => {
    try {
        const response = await axios.post(`${api}/modalidades`, {
            nome: nameParams,
            descricao: descParams,
            limite_pessoas: limitParams,
            campeonato_id: campeonato_idParams,
            valor_por_pessoa: valueParams,
            tipo: typeParams
        }, {
            headers: {
                'Authorization': `Bearer ${acessToken}`
            }
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

// Função para criar uma equipe
export const createEquipe = async (nameParams, salaParams, modalidade_idParams, statusParams, acessToken) => {
    try {
        const response = await axios.post(`${api}/times`, {
            nome: nameParams,
            sala: salaParams,
            modalidade_id: modalidade_idParams,
            status: statusParams
        }, {
            headers: {
                "Authorization": `Bearer ${acessToken}`
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            return { status: "error", message: "Erro ao criar equipe." };
        }
    }
};

// Função para atualizar o status de uma equipe
export const updateTeamStatus = async (teamId, newStatus) => {
    try {
        const response = await axios.patch(`${api}/times/${teamId}`, {
            status: newStatus
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            return { status: "error", message: "Erro ao atualizar status da equipe." };
        }
    }
};

export const createJogador = async (nameParams, salaParams, time_idParams, acessToken) => {
    try {
        const response = await axios.post(`${api}/jogadores`, {
            nome: nameParams,
            sala: salaParams,
            time_id: time_idParams
        }, {
            headers: {
                "Authorization": `Bearer ${acessToken}`
            }
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

export const generateConfrontos = async (date, annotation, updateUser, modalidade_id) => {
    try {
        const response = await axios.get(`${api}/gerar`, {
            data: date,
            anotacao: annotation,
            updateUser: updateUser,
            modalidade_id: modalidade_id
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