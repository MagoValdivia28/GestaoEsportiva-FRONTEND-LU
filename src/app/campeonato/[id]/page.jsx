'use client';
import styles from './page.module.css';
import logo from '@/assets/imagens/logo.png';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { useRouter, useParams } from 'next/navigation'; 

const CampeonatoDetails = () => {
  const router = useRouter(); 
  const { id } = useParams();

  // Função para redirecionar para a página de gerenciamento de equipe
  const navigateToTeamManagement = () => {
    router.push('/gdeequipes'); // Redireciona para a página "gedeequipe"
  };

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
        <h1 className={styles.title}>
          <span className={styles.titleRed}>Gerenciamento</span>
          <span className={styles.titleBlack}> de Atividades</span>
        </h1>
        <div className={styles.line}></div>
        <div className={styles.cardContainer}>
          <div className={styles.card} onClick={navigateToTeamManagement}>
            <div>
              <p>Gerenciamento de Equipe</p>
            </div>
          </div>
          <div className={styles.card2}>
            <p>Modalidades</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampeonatoDetails;