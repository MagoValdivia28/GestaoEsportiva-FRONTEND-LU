"use client";

import styles from "./page.module.css";
import logo from "@/assets/imagens/logo.png";
import Image from "next/image";
import VDP from "@/src/app/components/vdp/vdp";
import Confrontos from "@/src/app/components/confrontos/confrontos";
import { useParams } from "next/navigation";
import { getAPI } from "@/src/actions/api";
import { useEffect, useState } from "react";
import Header from "@/src/app/components/header/header";

const GdeAtividade = () => {
    const { atvId } = useParams();

    const [teams, setTeams] = useState([]);
    const [modalidade, setModalidade] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedWinner, setSelectedWinner] = useState(null);

    useEffect(() => {
        const fetchTeams = async () => {
            const response = await getAPI("times/modalidade/", atvId);

            if (response.status === "sucess") {
                setTeams(response.times);
            }
        };
        fetchTeams();
    }, []);

    useEffect(() => {
        const fetchModalidade = async () => {
            const response = await getAPI("modalidades/", atvId);
            setModalidade(response.data);
        };
        fetchModalidade();
    }, []);

    const handleAddWinner = () => {
        setShowModal(true);
    };

    const handleSelectWinner = (team) => {
        setSelectedWinner(team);
        setShowModal(false);
        console.log("Vencedor selecionado:", team);
    };

    return (
        <main className={styles.main_div}>
            <Header />

            <h2 className={styles.h2Title}>Gerenciamento de atividade</h2>

            {modalidade.tipo ? (
                <div>
                    <button className={styles.addWinnerButton} onClick={handleAddWinner}>
                        Adicionar Vencedor
                    </button>
                    <h2>Times Participantes:</h2>
                    <ul className={styles.teamList}>
                        {teams.map((team, index) => (
                            <li key={index} className={styles.teamItem}>
                                {team.nome}
                            </li>
                        ))}
                    </ul>

                    {showModal && (
                        <div className={styles.modalOverlay}>
                            <div className={styles.modal}>
                                <h3>Selecione o time vencedor</h3>
                                <ul>
                                    {teams.map((team, index) => (
                                        <li
                                            key={index}
                                            className={styles.modalTeamItem}
                                            onClick={() => handleSelectWinner(team)}
                                        >
                                            {team.nome}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => setShowModal(false)}>Cancelar</button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div></div>
            )}

            <div className={styles.container}>
                <h2 className={styles.h2Title}>Confrontos</h2>

                {modalidade.tipo === false && (
                    <div>
                        <div className={styles.list_container}>
                            <VDP teams={teams} />
                        </div>
                        <ul className={styles.confrontos_container}>
                            <Confrontos />
                        </ul>
                    </div>
                )}
            </div>
        </main>
    );
};

export default GdeAtividade;
