'use client';
import styles from './page.module.css';
import hometopo from '../../../assets/imagens/hometopo.png';
import logo from '../../../assets/imagens/logo.png';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import Card from '../components/Card/page';
import { useRouter } from 'next/navigation'; // Importando useRouter
import { useEffect, useState } from 'react';
import { getCampeonatoByDate } from '@/src/actions/campeonato';
import PopUpError from '@/src/app/components/PopUpError';

export default function Home() {
  const router = useRouter(); // Inicializando o roteador
  const [error, setError] = useState(null);
  const [campeonato, setCampeonato] = useState(null);

  useEffect(() => {
    const getCampeonato = async () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Adiciona 1 porque os meses são zero-indexados
      const day = date.getDate();
      const fullDate = `${year}-${month}-${day}`;
      const response = await getCampeonatoByDate(fullDate);
      if (response.message) {
        setError(response);
        setTimeout(() => {
          setError(null);
        }, 1500);
      } else {
        setCampeonato(response);
      }
    };
    getCampeonato();
  }, []);

  // Função para lidar com o clique no card "Adicionar"
  const handleAddClick = () => {
    router.push('/cadastrocampeonato'); // Redirecionando para a página de cadastro
  };
  const handlehistorico = () => {
    router.push('/historico');
  }

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Image src={logo} className={styles.logo} width={130} height={130} />
          <div className={styles.profileIcon}>
            <button className={styles.profileButton}>
              <FaUser size={20} />
            </button>
          </div>
        </header>
        <main className={styles.main}>
          <h2>Gerenciamento de atividades desportivas</h2>
          <hr className={styles.separator} />
          <div className={styles.cardContainer}>
            <Card title="Adicionar" imageUrl={hometopo} onClick={handleAddClick} /> {/* Passando o manipulador de clique */}
            <Card title="Historico" imageUrl={hometopo} />
            <Card title="Interclasse" imageUrl={hometopo} />
            {
              campeonato && (
                campeonato.map((item) => (
                  <Card key={item.id} title={item.titulo} imageUrl={hometopo} />
                ))
              )
            }
          </div>
        </main>
      </div>
      {error && <PopUpError error={error} />}
    </>
  );
}
