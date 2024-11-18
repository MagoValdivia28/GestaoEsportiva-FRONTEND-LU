"use client";

import styles from "./page.module.css";
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
    }, [atvId]);

    useEffect(() => {
        const fetchModalidade = async () => {
            const response = await getAPI("modalidades/", atvId);
            setModalidade(response.data);
        };
        fetchModalidade();
    }, [atvId]);

    const handleAddWinner = () => {
        setShowModal(true);
    };

    const handleSelectWinner = (team) => {
        setSelectedWinner(team);
        setShowModal(false);
    };

    return (
        <main className={styles.main_div}>
            <Header />

            <h2 className={styles.h2Title}>
                {modalidade.nome_modalidade}
            </h2>

            {modalidade.tipo ? (
                <div>
                    {!selectedWinner && (
                        <div className={styles.addWinnerContainer}>
                            <button className={styles.addWinnerButton} onClick={handleAddWinner}>
                                Adicionar Vencedor
                            </button>
                        </div>
                    )}

                    {selectedWinner && (
                        <div className={styles.winnerDisplay}>
                            <h3>Vencedor: {selectedWinner.nome}</h3>
                            <div className={styles.winnerInfo}>
                                <Image
                                    src={selectedWinner.logo}
                                    alt={`Logo do time ${selectedWinner.nome}`}
                                    width={200}
                                    height={200}
                                    className={styles.winnerLogo}
                                />
                                <span className={styles.winnerName}>{selectedWinner.nome}</span>
                            </div>
                            <p>Parabéns ao time vencedor!</p>
                        </div>
                    )}
                    <div className={styles.timesContainer}>
                        <h2 className={styles.timesTitle}>Times Participantes:</h2>
                        <ul className={styles.teamList}>
                            {teams.map((team, index) => (
                                <li key={index} className={styles.teamItem}>
                                    <Image
                                        src={team.logo}
                                        alt={`Logo do time ${team.nome}`}
                                        width={50}
                                        height={50}
                                        className={styles.teamLogo}
                                    />
                                    <span className={styles.teamName}>{team.nome}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

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

                {modalidade.tipo === false && (
                    <div>
                        <div className={styles.list_container}>
                            <VDP teams={teams} />
                        </div>
                        <ul className={styles.confrontos_container}>
                            <Confrontos />
                        </ul>
                        <h2 className={styles.h2Title}>Confrontos</h2>
                    </div>

                )}
            </div>
        </main>
    );
};

export default GdeAtividade;
