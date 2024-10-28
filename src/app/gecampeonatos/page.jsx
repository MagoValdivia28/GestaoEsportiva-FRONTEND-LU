'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import hometopo from '../../../assets/imagens/hometopo.png';
import historico from '../../../assets/imagens/historico.jpg';
import adicionar from '../../../assets/imagens/adicionar.jpg';
import logo from '../../../assets/imagens/logo.png';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import Card from '../components/Card/page';
import { useRouter } from 'next/navigation';
import { getCampeonatoByDate } from '@/src/actions/campeonato';
import PopUpError from '@/src/app/components/PopUpError';

const Home = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [campeonato, setCampeonato] = useState([]);

  useEffect(() => {
    const fetchCampeonato = async () => {
      const date = new Date();
      const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      const response = await getCampeonatoByDate(formattedDate);
      if (response.message) {
        setError(response);
        setTimeout(() => setError(null), 1500);
      } else {
        setCampeonato(response);
      }
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
      <header className={styles.header}>
        <Image src={logo} alt="Logo" className={styles.logo} width={130} height={130} />
        <button className={styles.profileButton}>
          <FaUser size={20} />
        </button>
      </header>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.titleRed}>Gerenciamento</span>
          <span className={styles.titleBlack}> de Atividades</span>
        </h1>
        <div className={styles.line}></div>
        
        <div className={styles.cardsContainer}>
          <Card title="Adicionar" imageUrl={adicionar} onClick={handleAddClick} />
          <Card title="Histórico" imageUrl={historico} onClick={handleHistoricoClick} />
          <Card title="Interclasse" imageUrl={hometopo} />
          {
              campeonato && (
                campeonato.map((item) => (
                  <Card onClick={() => handleRoute(item.id)} key={item.id} title={item.titulo} imageUrl={hometopo} />
                ))
              )
            }
        </div>
      </main>

      {error && <PopUpError error={error} />}
    </div>
  );
};

export default Home;
