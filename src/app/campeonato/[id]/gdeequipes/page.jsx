"use client";

import styles from './page.module.css';
import CadastroPopup from '@/src/app/components/PopUpEquipes';
import Header from '@/src/app/components/header/header';
import { FaSearch } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import Equipes from '@/src/app/components/equipes/equipes';
import { getAPI, updateTeamStatus, deleteEquipe } from '@/src/actions/api';
import { useParams } from 'next/navigation';
import PopUpError from '@/src/app/components/PopUpError';
import { AuthContext } from '@/src/contexts/AuthContext';
import Guarantee from '@/src/app/components/GuaranteePopUp';
import ButtonBack from '@/src/app/components/ButtonBack/page';

const GdeEquipes = () => {
    const { acessToken } = useContext(AuthContext);
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [approvedTeams, setApprovedTeams] = useState([]);
    const [pendingTeams, setPendingTeams] = useState([]);
    const [rejectedTeams, setRejectedTeams] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalities, setModalities] = useState([]);
    const [teamDetailsOpen, setTeamDetailsOpen] = useState(false); // Controle do pop-up de detalhes
    const [selectedTeam, setSelectedTeam] = useState(null); // Time selecionado 
    const [showGuarantee, setShowGuarantee] = useState(null);

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
    // oi
    const handleVerification = (team) => {
        console.log(team);

        setShowGuarantee(team);
    };
    const handleApprove = async (team) => {
        const updated = await updateTeamStatus(team.time_id, team.time_nome, team.time_sala, team.modalidade_id, 'aprovada', team.pontos, acessToken);
        if (updated) {
            setPendingTeams((prev) => prev.filter((t) => t.time_id !== team.time_id));
            setApprovedTeams((prev) => [...prev, { ...team, status: 'aprovada' }]);
            setShowGuarantee(null);
        }
    };

    const handleReject = async (team) => {
        console.log(team);

        const updated = await updateTeamStatus(team.time_id, team.time_nome, team.time_sala, team.modalidade_id, 'rejeitada', team.pontos, acessToken);;
        // console.log(updated);

        if (updated) {
            setPendingTeams((prev) => prev.filter((t) => t.time_id !== team.time_id));
            setRejectedTeams((prev) => [...prev, { ...team, status: 'rejeitada' }]);
        }
    };

    const handlePending = async (team) => {
        const updated = await updateTeamStatus(team.time_id, team.time_nome, team.time_sala, team.modalidade_id, 'pendente', team.pontos, acessToken);
        closeTeamDetails();
        if (updated) {
            setRejectedTeams((prev) => prev.filter((t) => t.time_id !== team.time_id));
            setPendingTeams((prev) => [...prev, { ...team, status: 'pendente' }]);
        }
    };

    const handleDelete = async (team) => {
        const response = await deleteEquipe(team.time_id, acessToken);
        if (response.status === 'sucess') {
            setError({ status: 'sucess', message: 'Equipe excluída com sucesso' });
            setTimeout(() => setError(null), 1000); // Reduced timeout
            fetchTeams();
            closeTeamDetails();
        } else {
            setError({ status: 'error', message: response.message });
            setTimeout(() => setError(null), 1000); // Reduced timeout
        }
    };



    const handleSearch = (e) => {
        const search = e.target.value;
        getAPI('times/campeonato/', id, { status: 'aprovada', name: search }).then(data => setApprovedTeams(data?.times || []));
        getAPI('times/campeonato/', id, { status: 'pendente', name: search }).then(data => setPendingTeams(data?.times || []));
        getAPI('times/campeonato/', id, { status: 'rejeitada', name: search }).then(data => setRejectedTeams(data?.times || []));
    };

    const openTeamDetails = (team) => {
        console.log(team);

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
                    <ButtonBack />
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
                            onApprove={() => handleVerification(team)}
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
                        {
                            selectedTeam.status === 'rejeitada' && (
                                <div className={styles.actions}>
                                    <button onClick={() => handleDelete(selectedTeam)} className={styles.approveButton}>Excluir</button>
                                    <button onClick={() => handlePending(selectedTeam)} className={styles.rejectButton}>Voltar para pendente</button>

                                </div>
                            )
                        }
                        <button onClick={() => closeTeamDetails()} className={styles.rejectButton}>Fechar</button>
                    </div>
                </div>
            )}

            {showGuarantee && (
                <div className={styles.overlay}>
                    <div className={styles.popup}>
                        <Guarantee
                            title="Aprovar Equipe"
                            message={`Deseja aprovar a equipe ${showGuarantee.time_nome}?`}
                            close={() => setShowGuarantee(null)}
                            advance={() => handleApprove(showGuarantee)}
                            txtAdvance="Aprovar"
                        />
                    </div>
                </div>
            )}

            {error && <PopUpError error={error} />}
        </div>
    );
}

export default GdeEquipes;
