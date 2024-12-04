'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Logo from '../../../assets/imagens/logo.png';
import { getAPI } from '@/src/actions/api';
import Header from '../components/header/header';
import { useRouter } from 'next/navigation';
import ButtonBack from '../components/ButtonBack/page';
import Footer from '../components/footer/page';

const Historico = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedCampeonato, setSelectedCampeonato] = useState(null);
  const [campeonatos, setCampeonatos] = useState([]);
  const [campeoes, setCampeoes] = useState([]);


  useEffect(() => {
    const getCampeoes = async () => {
      const data = await getAPI('confrontos/top');
      setCampeoes(data.data || []);
    };
    getCampeoes();
  }, []);

  console.log(campeoes);
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
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
    <>
      <main className={styles.container}>
        <Header />
        <div className={styles.header}>
          <ButtonBack />
          <h1>
            <span className={styles.titleRed}>Histórico</span>
            <span className={styles.titleBlack}> de Campeonatos</span>
          </h1>
        </div>
        <div className={styles.line}></div>
        <section className={styles.cardsContainer}>
          {campeoes.length > 0 ? (
            campeoes.map((campeonato, index) => (
              <div key={index} className={styles.card} onClick={() => handleCardClick(campeonato)}>
                <Image src={Logo} alt={campeonato.campeonato_titulo} width={80} height={80} className={styles.logo} />
                <h3>{campeonato.campeonato_titulo}</h3>
                <div className={styles.linecard}></div>
                <p>{formatDate(campeonato.campeonato_data_final)}</p>
              </div>
            ))
          ) : (
            <h2 className={styles.noneCamp}>Nenhum campeonato cadastrado</h2>
          )}
        </section>

        {showModal && selectedCampeonato && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>&times;</button>
              <h3>{selectedCampeonato.campeonato_titulo}</h3>
              <div className={styles.linecard}></div>
              <Image src={Logo} alt={selectedCampeonato.campeonato_titulo} width={120} height={120} className={styles.modalImage} />
              <p><strong>Vencedor:</strong> {selectedCampeonato.time_nome}</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Historico;
