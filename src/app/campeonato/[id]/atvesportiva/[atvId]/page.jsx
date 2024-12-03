"use client";

import styles from "./page.module.css";
import { useParams } from "next/navigation";
import { getAPI } from "@/src/actions/api";
import { useEffect, useState } from "react";
import Header from "@/src/app/components/header/header";
import ModalidadeTruePage from "./ModalidadeTruePage";
import ModalidadeFalsePage from "./ModalidadeFalsePage";

const GdeAtividade = () => {
    const { atvId } = useParams();

    const [teams, setTeams] = useState([]);
    const [modalidade, setModalidade] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            const response = await getAPI("times/modalidade/", atvId);

            if (response.status === "sucess") {
                setTeams(response.times);
            }
        };
        fetchTeams();
    }, [atvId]);

    useEffect(() => {
        const fetchModalidade = async () => {
            const response = await getAPI("modalidades/", atvId);
            setModalidade(response.data);
        };
        fetchModalidade();
    }, [atvId]);

    if (!modalidade) {
        return <div>Loading...</div>;
    }

    return (
        <main className={styles.main_div}>
            <Header />
            <h2 className={styles.h2Title}>
                {modalidade.nome_modalidade}
            </h2>
            {modalidade.tipo === true && (
                <ModalidadeTruePage modalidade={modalidade} teams={teams} />
            )}
            {modalidade.tipo === false && (
                <ModalidadeFalsePage teams={teams} />
            )}
        </main>
    );
};

export default GdeAtividade;
