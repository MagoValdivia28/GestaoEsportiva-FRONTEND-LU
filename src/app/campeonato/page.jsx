'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import futzin from '../../../assets/imagens/criajogando.jpg';
import historico from '../../../assets/imagens/historico.jpg';
import adicionar from '../../../assets/imagens/graminha.jpg';
import Card from '../components/Card/page';
import { useRouter } from 'next/navigation';
import { getAPI } from '@/src/actions/api';
import PopUpError from '@/src/app/components/PopUpError';
import Header from '../components/header/header';
import Footer from '../components/footer/page';
import { BlinkBlur } from 'react-loading-indicators';

const geCampeonatos = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [campeonato, setCampeonato] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampeonato = async () => {
      const date = new Date();
      const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      const response = await getAPI('campeonatos/date/', formattedDate);
      if (response.message) {
        setError(response);
        setTimeout(() => setError(null), 1000); // Reduced timeout
      } else {
        setCampeonato(response);
      }
      setLoading(false);
    };
    fetchCampeonato();
  }, []);

  const handleRoute = (id) => {
    router.push(`/campeonato/${id}`);
  };

  const handleAddClick = () => router.push('/cadastrocampeonato');
  const handleHistoricoClick = () => router.push('/historico');

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.titleRed}>Gerenciamento</span>
          <span className={styles.titleBlack}> de Atividades</span>
        </h1>
        <div className={styles.line}></div>

        <div className={styles.cardsContainer}>
          <Card title="Adicionar" imageUrl={adicionar} onClick={handleAddClick} />
          <Card title="Histórico" imageUrl={historico} onClick={handleHistoricoClick} />
          {
            loading ? (
              <BlinkBlur color="#cf0d0d" size="medium" />
            ) : (
              campeonato.map((item) => (
                <Card onClick={() => handleRoute(item.id)} key={item.id} title={item.titulo} imageUrl={futzin} />
              ))
            )
          }
        </div>
      </main>

      {error && <PopUpError error={error} />}
      <Footer />
    </div>
  );
};

export default geCampeonatos;