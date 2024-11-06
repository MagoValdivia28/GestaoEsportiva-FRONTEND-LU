"use client";

import styles from './page.module.css';
import Header from '../components/header/header';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Equipes from '../components/equipes/equipes';
import { getAPI } from '@/src/actions/api';

const GdeEquipes = () => {
    const { id } = useParams();
    const [approvedTeams, setApprovedTeams] = useState([]);
    const [pendingTeams, setPendingTeams] = useState([]);
    const [rejectedTeams, setRejectedTeams] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        getAPI('times/campeonato/', id, {status: 'aprovada'}).then(data => setApprovedTeams(data.times));
        getAPI('times/campeonato/', id, {status: 'pendente'}).then(data => setPendingTeams(data.times));
        getAPI('times/campeonato/', id, {status: 'rejeitada'}).then(data => setRejectedTeams(data.times));
    }, []);
    return (
        <div className={styles.main_div}>
            <Header/>
            <div className={styles.container_times}>
                <h1 className={styles.title}>
                    <span className={styles.titleRed}>Gerenciamento</span>
                    <span className={styles.titleBlack}> de Equipe</span>
                </h1>
                <div className={styles.line}></div>
            </div>
            <div className={styles.search_container}>
                <div className={styles.input_container}>
                    <input type="search" id="Search" name="Search" placeholder='pesquisar equipe por nome' required />
                    <label htmlFor="Search">
                        <FaSearch />
                    </label>
                </div>
                <div className={styles.blackline}></div>
            </div>

            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Aprovadas</h2>
                {
                    approvedTeams.map(team => (
                        <Equipes key={team.time_id} nameTeam={team.time_nome} members={team.jogadores} />
                    ))
                }
            </div>
            <div className={styles.line}></div>


            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Pendentes</h2>
                {
                    pendingTeams.map(team => (
                        <Equipes key={team.time_id} nameTeam={team.time_nome} members={team.jogadores} />
                    ))
                }
            </div>
            <div className={styles.line}></div>

            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Rejeitadas</h2>
                {
                    rejectedTeams.map(team => (
                        <Equipes key={team.time_id} nameTeam={team.time_nome} members={team.jogadores} />
                    ))
                }
            </div>
        </div>
    );
}

export default GdeEquipes;
