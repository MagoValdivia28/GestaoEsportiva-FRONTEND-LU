"use client";

import styles from './page.module.css';
// import logo from "../assets/imagens/logo.png";
import Image from 'next/image';
import Header from '@/src/app/components/header/header';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Equipes from '@/src/app/components/equipes/equipes';
import { getAPI } from '@/src/actions/api';
import { useRouter, useParams } from 'next/navigation';

const GdeEquipes = () => {
    const { id } = useParams();

    const [approvedTeams, setApprovedTeams] = useState([]);
    const [pendingTeams, setPendingTeams] = useState([]);
    const [rejectedTeams, setRejectedTeams] = useState([]);
    useEffect(() => {
        getAPI('times/campeonato/', id, { status: 'aprovada' }).then(data => setApprovedTeams(data.times));
        getAPI('times/campeonato/', id, { status: 'pendente' }).then(data => setPendingTeams(data.times));
        getAPI('times/campeonato/', id, { status: 'rejeitada' }).then(data => setRejectedTeams(data.times));
    }, []);

    const handleSearch = (e) => {
        const search = e.target.value;
        getAPI('times/campeonato/', id, { status: 'aprovada', name: search }).then(data => setApprovedTeams(data.times));
        getAPI('times/campeonato/', id, { status: 'pendente', name: search }).then(data => setPendingTeams(data.times));
        getAPI('times/campeonato/', id, { status: 'rejeitada', name: search }).then(data => setRejectedTeams(data.times));
    };
    return (
        <div className={styles.main_div}>
            <Header />
            {/* <Image src={logo} id={styles.logo} width={130} height={130} /> */}
            <div className={styles.container_times}>
                <h1 className={styles.title}>
                    <span className={styles.titleRed}>Gerenciamento</span>
                    <span className={styles.titleBlack}> de Equipe</span>
                </h1>
                <div className={styles.line}></div>
            </div>
            <div className={styles.search_container}>
                <div className={styles.input_container}>
                    <input type="search" id="Search" name="Search" placeholder='Pesquisar equipe por nome' onChange={handleSearch} />
                    <label htmlFor="Search">
                        <FaSearch />
                    </label>
                </div>
                <div className={styles.blackline}></div>
            </div>

            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Aprovadas</h2>
                {
                    approvedTeams ? approvedTeams.map(team => (
                        <Equipes key={team.time_id} nameTeam={team.time_nome} members={team.jogadores} />
                    )) : <p>Nao tem</p>
                }
            </div>
            <div className={styles.line}></div>


            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Pendentes</h2>
                {
                    pendingTeams ? pendingTeams.map(team => (
                        <Equipes key={team.time_id} nameTeam={team.time_nome} members={team.jogadores} />
                    )) : <p>Nao tem</p>
                }
            </div>
            <div className={styles.line}></div>

            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Rejeitadas</h2>
                {
                    rejectedTeams ? rejectedTeams.map(team => (
                        <Equipes key={team.time_id} nameTeam={team.time_nome} members={team.jogadores} />
                    )) : <p>Nao tem</p>
                }
            </div>

            <button className={styles.button}>Adicionar Equipe</button>
        </div>
    );
}

export default GdeEquipes;
