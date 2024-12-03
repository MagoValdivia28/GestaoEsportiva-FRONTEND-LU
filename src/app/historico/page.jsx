'use client' // pages/historico.js
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Logo from '../../../assets/imagens/logo.png';
import { getAPI } from '@/src/actions/api';
import Header from '../components/header/header';
import { useRouter } from 'next/navigation';
import ButtonBack from '../components/ButtonBack/page';

const Historico = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedCampeonato, setSelectedCampeonato] = useState(null);
  const [campeonatos, setCampeonatos] = useState([])

  useEffect(() => {
    const getAllCampeonatos = async () => {
      const campeonatos = await getAPI('campeonatos');
      setCampeonatos(campeonatos.campeonatos);
    };
    getAllCampeonatos();
  }, []);

  // Função para formatar a data
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Cria um objeto Date
    const dia = date.getDate().toString().padStart(2, '0'); // Garantir que o dia tenha 2 dígitos
    const mes = (date.getMonth() + 1).toString().padStart(2, '0'); // Mes começa do zero, então adicionamos +1
    const ano = date.getFullYear(); // Obtemos o ano
    return `${dia}/${mes}/${ano}`; // Formato final dd/mm/yyyy
  };

  const handleCardClick = (campeonato) => {
    setSelectedCampeonato(campeonato);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCampeonato(null);
  };

  return (
    <main className={styles.container}>
      <Header />
      <h1 className={styles.title}>
        <ButtonBack />
        <span className={styles.titleRed}>Histórico</span>
        <span className={styles.titleBlack}> de Campeonatos</span>
      </h1>
      <div className={styles.line}></div>
      <div className={styles.cardsContainer}>
        {
          campeonatos.length > 0 ? campeonatos.map((campeonato, index) => (
            <div key={index} className={styles.card} onClick={() => handleCardClick(campeonato)}>
              <Image src={Logo} alt={campeonato.titulo} width={100} />
              <h3>{campeonato.titulo}</h3>
              <div className={styles.linecard}></div>
              <h2>{formatDate(campeonato.data_final)}</h2> {/* Aqui usamos a função de formatação */}
            </div>
          )) : <h2 className={styles.none_camp}>Nenhum campeonato cadastrado</h2>
        }
      </div>

      {showModal && selectedCampeonato && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
            <h3>{selectedCampeonato.titulo}</h3>
            <div className={styles.linecard}></div>
            <Image src={Logo} alt={selectedCampeonato.titulo} width={150} className={styles.modalImage} />
            <p><strong>Vencedor:</strong> {selectedCampeonato.vencedor}</p>

          </div>
        </div>
      )}
    </main>
  );
};

export default Historico;
