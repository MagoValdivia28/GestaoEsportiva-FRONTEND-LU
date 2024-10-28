'use client'// pages/historico.js
import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Logo from '../../../assets/imagens/logo.png';

const Historico = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCampeonato, setSelectedCampeonato] = useState(null);

  const campeonatos = [
    {
      ano: 2023,
      titulo: 'Campeonato Interescolar',
      descricao: 'Competição anual entre as escolas do SENAI da região.',
      vencedor: 'Time Vermelho',
      imagem: Logo,
    },
    {
      ano: 2022,
      titulo: 'Torneio de Futsal',
      descricao: 'Torneio interno de futsal entre os cursos do SENAI.',
      vencedor: 'Time Branco',
      imagem: Logo,
    },
    {
      ano: 2021,
      titulo: 'Copa SENAI',
      descricao: 'Evento esportivo que incluiu várias modalidades esportivas.',
      vencedor: 'Time Azul',
      imagem: Logo,
    },
  ];

  const handleCardClick = (campeonato) => {
    setSelectedCampeonato(campeonato);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCampeonato(null);
  };

  return (
    <div className={styles.container}>
      <Image src={Logo} alt="Logo SENAI" className={styles.logo} />
      <h1 className={styles.title}>
        <span className={styles.titleRed}>Histórico</span> 
        <span className={styles.titleBlack}> de Campeonatos</span>
      </h1>
      <div className={styles.line}></div>
      <div className={styles.cardsContainer}>
        {campeonatos.map((campeonato, index) => (
          <div key={index} className={styles.card} onClick={() => handleCardClick(campeonato)}>
            <Image src={campeonato.imagem} alt={campeonato.titulo} width={130} className={styles.image} />
            <h2>{campeonato.ano}</h2>
            <h3>{campeonato.titulo}</h3>
            <p>{campeonato.descricao}</p>
            <p><strong>Vencedor:</strong> {campeonato.vencedor}</p>
          </div>
        ))}
      </div>

      {showModal && selectedCampeonato && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
            <Image src={selectedCampeonato.imagem} alt={selectedCampeonato.titulo} width={130} className={styles.modalImage} />
            <h2>{selectedCampeonato.ano}</h2>
            <h3>{selectedCampeonato.titulo}</h3>
            <p>{selectedCampeonato.descricao}</p>
            <p><strong>Vencedor:</strong> {selectedCampeonato.vencedor}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Historico; 