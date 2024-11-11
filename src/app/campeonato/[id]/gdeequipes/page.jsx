"use client";

import styles from './page.module.css';
import CadastroPopup from '@/src/app/components/PopUpEquipes';
import Header from '@/src/app/components/header/header';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Equipes from '@/src/app/components/equipes/equipes';
import { getAPI } from '@/src/actions/api';
import { useParams } from 'next/navigation';

const GdeEquipes = () => {
    const { id } = useParams();

    const [approvedTeams, setApprovedTeams] = useState([]);
    const [pendingTeams, setPendingTeams] = useState([]);
    const [rejectedTeams, setRejectedTeams] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalities, setModalities] = useState([]);

    useEffect(() => {
        getAPI('times/campeonato/', id, { status: 'aprovada' }).then(data => setApprovedTeams(data?.times || []));
        getAPI('times/campeonato/', id, { status: 'pendente' }).then(data => setPendingTeams(data?.times || []));
        getAPI('times/campeonato/', id, { status: 'rejeitada' }).then(data => setRejectedTeams(data?.times || []));
    }, []);

    useEffect(() => {
        const fetchModalidades = async () => {
            const data = await getAPI('modalidades/campeonato/', id);
            setModalities(data || []);
        }
        fetchModalidades();
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const handleSearch = (e) => {
        const search = e.target.value;
        getAPI('times/campeonato/', id, { status: 'aprovada', name: search }).then(data => setApprovedTeams(data?.times || []));
        getAPI('times/campeonato/', id, { status: 'pendente', name: search }).then(data => setPendingTeams(data?.times || []));
        getAPI('times/campeonato/', id, { status: 'rejeitada', name: search }).then(data => setRejectedTeams(data?.times || []));
    };

    return (
        <div className={styles.main_div}>
            <Header />
            <div className={styles.container_times}>
                <h1 className={styles.title}>
                    <span className={styles.titleRed}>Gerenciamento</span>
                    <span className={styles.titleBlack}> de Equipe</span>
                </h1>
                <div className={styles.line}></div>
            </div>

            <div className={styles.search_container}>
                <div className={styles.input_container}>
                    <input 
                        type="search" 
                        id="Search" 
                        name="Search" 
                        placeholder='Pesquisar equipe por nome' 
                        onChange={handleSearch} 
                    />
                    <label htmlFor="Search">
                        <FaSearch />
                    </label>
                </div>
                <div className={styles.blackline}></div>
            </div>

            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Aprovadas</h2>
                {(approvedTeams || []).length > 0 ? (
                    approvedTeams.map(team => (
                        <Equipes key={team.time_id} nameTeam={team.time_nome} members={team.jogadores} />
                    ))
                ) : (
                    <p>Não há equipes aprovadas</p>
                )}
            </div>

            <div className={styles.line}></div>

            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Pendentes</h2>
                {(pendingTeams || []).length > 0 ? (
                    pendingTeams.map(team => (
                        <Equipes key={team.time_id} nameTeam={team.time_nome} members={team.jogadores} />
                    ))
                ) : (
                    <p>Não há equipes pendentes</p>
                )}
            </div>

            <div className={styles.line}></div>

            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Rejeitadas</h2>
                {(rejectedTeams || []).length > 0 ? (
                    rejectedTeams.map(team => (
                        <Equipes key={team.time_id} nameTeam={team.time_nome} members={team.jogadores} />
                    ))
                ) : (
                    <p>Não há equipes rejeitadas</p>
                )}
            </div>

            <button onClick={() => setIsOpen(true)} className={styles.button}>
                Adicionar Equipe
            </button>

            {isOpen && (
                <div className={styles.overlay}>
                    <div className={styles.popup}>
                        <CadastroPopup 
                            isOpen={isOpen} 
                            onClose={() => setIsOpen(false)} 
                            modalities={modalities} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default GdeEquipes;
