"use client";

import styles from './page.module.css';
import CadastroPopup from '@/src/app/components/PopUpEquipes';
import Header from '@/src/app/components/header/header';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Equipes from '@/src/app/components/equipes/equipes';
import { getAPI, updateTeamStatus } from '@/src/actions/api';
import { useParams } from 'next/navigation';
import PopUpError from '@/src/app/components/PopUpError';

const GdeEquipes = () => {
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [approvedTeams, setApprovedTeams] = useState([]);
    const [pendingTeams, setPendingTeams] = useState([]);
    const [rejectedTeams, setRejectedTeams] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalities, setModalities] = useState([]);
    const [teamDetailsOpen, setTeamDetailsOpen] = useState(false); // Controle do pop-up de detalhes
    const [selectedTeam, setSelectedTeam] = useState(null); // Time selecionado 


    const fetchTeams = async () => {
        const approved = await getAPI('times/campeonato/', id, { status: 'aprovada' });
        const pending = await getAPI('times/campeonato/', id, { status: 'pendente' });
        const rejected = await getAPI('times/campeonato/', id, { status: 'rejeitada' });

        setApprovedTeams(approved?.times || []);
        setPendingTeams(pending?.times || []);
        setRejectedTeams(rejected?.times || []);
    }

    useEffect(() => {
        fetchTeams();
    }, []);

    useEffect(() => {
        const fetchModalidades = async () => {
            const data = await getAPI('modalidades/campeonato/', id);
            setModalities(data || []);
        }
        fetchModalidades();
    }, []);

    useEffect(() => {
        if (isOpen || teamDetailsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen, teamDetailsOpen]);

    const handleApprove = async (team) => {
        const updated = await updateTeamStatus(team.time_id, 'aprovada');
        if (updated) {
            setPendingTeams((prev) => prev.filter((t) => t.time_id !== team.time_id));
            setApprovedTeams((prev) => [...prev, { ...team, status: 'aprovada' }]);
        }
    };

    const handleReject = async (team) => {
        const updated = await updateTeamStatus(team.time_id, 'rejeitada');
        if (updated) {
            setPendingTeams((prev) => prev.filter((t) => t.time_id !== team.time_id));
            setRejectedTeams((prev) => [...prev, { ...team, status: 'rejeitada' }]);
        }
    };

    const handleSearch = (e) => {
        const search = e.target.value;
        getAPI('times/campeonato/', id, { status: 'aprovada', name: search }).then(data => setApprovedTeams(data?.times || []));
        getAPI('times/campeonato/', id, { status: 'pendente', name: search }).then(data => setPendingTeams(data?.times || []));
        getAPI('times/campeonato/', id, { status: 'rejeitada', name: search }).then(data => setRejectedTeams(data?.times || []));
    };

    const openTeamDetails = (team) => {
        setSelectedTeam(team);
        setTeamDetailsOpen(true);
    };

    const closeTeamDetails = () => {
        setSelectedTeam(null);
        setTeamDetailsOpen(false);
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

            <h2 className={styles.title}>Equipes Aprovadas</h2>
            <div className={styles.times}>
                {(approvedTeams || []).length > 0 ? (
                    approvedTeams.map(team => (
                        <Equipes
                            key={team.time_id}
                            nameTeam={team.time_nome}
                            members={team.jogadores}
                            onClick={() => openTeamDetails(team)}
                        />
                    ))
                ) : (
                    <p>Não há equipes aprovadas</p>
                )}
            </div>

            <div className={styles.line}></div>

            <h2 className={styles.title}>Equipes Pendentes</h2>
            <div className={styles.times}>
                {(pendingTeams || []).length > 0 ? (
                    pendingTeams.map(team => (
                        <Equipes
                            key={team.time_id}
                            nameTeam={team.time_nome}
                            members={team.jogadores}
                            onClick={() => openTeamDetails(team)}
                            onApprove={() => handleApprove(team)}
                            onReject={() => handleReject(team)}
                        />
                    ))
                ) : (
                    <p>Não há equipes pendentes</p>
                )}
            </div>

            <div className={styles.line}></div>

            <h2 className={styles.title}>Equipes Rejeitadas</h2>
            <div className={styles.times}>
                {(rejectedTeams || []).length > 0 ? (
                    rejectedTeams.map(team => (
                        <Equipes
                            key={team.time_id}
                            nameTeam={team.time_nome}
                            members={team.jogadores}
                            onClick={() => openTeamDetails(team)}
                        />
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
                            setError={setError}
                            fetchTeams={fetchTeams}
                        />
                    </div>
                </div>
            )}

            {teamDetailsOpen && selectedTeam && (
                <div className={styles.overlay}>
                    <div className={styles.popup}>
                        <h3>Detalhes do Time</h3>
                        <p><strong>Nome:</strong> {selectedTeam.time_nome}</p>
                        <p><strong>Membros:</strong></p>
                        <ul>
                            {selectedTeam.jogadores.map((jogador, index) => (
                                <li key={index}>{jogador.nome}</li>
                            ))}
                        </ul>
                        <button onClick={closeTeamDetails}>Fechar</button>
                    </div>
                </div>
            )}

            {error && <PopUpError error={error} />}
        </div>
    );
}

export default GdeEquipes;
