'use client';
import styles from './page.module.css';
import logo from '@/assets/imagens/logo.png';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { useRouter, useParams } from 'next/navigation'; 
import Header from '../../components/header/header';

const CampeonatoDetails = () => {
  const router = useRouter(); 
  const { id } = useParams();

  // Função para redirecionar para a página de gerenciamento de equipe
  const navigateToTeamManagement = () => {
    router.push(`/campeonato/${id}/gdeequipes`); // Redireciona para a página "gedeequipe"
  };

  // Função para redirecionar para a página de gerenciamento de modalidades
  const navigateToModalidadeManagement = () => {
    router.push(`/campeonato/${id}/atvesportiva`); // Redireciona para a página "modalidades"
  };

  return (
    <>
        <Header /> 
      <div className={styles.container}>
       
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
          <div className={styles.card2} onClick={navigateToModalidadeManagement}>
            <p>Modalidades</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampeonatoDetails;
