// pages/historico.js
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Logo from '../../../assets/imagens/logo.png';
import hometopo from '../../../assets/imagens/hometopo.png';
const Historico = () => {
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
    // Adicione mais campeonatos conforme necessário
  ];

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
          <div key={index} className={styles.card}>
            <Image src={campeonato.imagem} alt={campeonato.titulo} width={130} className={styles.image} />
            <h2>{campeonato.ano}</h2>
            <h3>{campeonato.titulo}</h3>
            <p>{campeonato.descricao}</p>
            <p><strong>Vencedor:</strong> {campeonato.vencedor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Historico;
