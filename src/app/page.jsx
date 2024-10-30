'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaUser, FaUsers, FaArrowRight, FaComments } from 'react-icons/fa';
import logo from '../../assets/imagens/logo.png';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const handleConhecaNosClick = () => {
    router.push('/conheca-nos'); // Navigate to the "Conheça-nos" page
  };

  const handleGerenciarCampeonatosClick = () => {
    router.push('/campeonato');
  };

  const handleFeedbackClick = () => {
    router.push('/feedback'); 
  };

  return (
    <div className={styles.homeContainer}>
      {/* Seção de Introdução */}
      <section className={styles.heroSection}>
        <div className={styles.blur}>
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <div className={styles.logo} />

              <div className={styles.heroTitle}>
                <h1 style={{ fontSize: '50px' }}>AAPM</h1>
                <p style={{ fontSize: '17px' }}> A AAPM (Associação de Alunos, Pais e Mestres) do SENAI promove a cooperação entre alunos, pais, professores e a comunidade para aprimorar a formação dos estudantes. Ela organiza eventos e projetos, arrecada recursos para melhorar a escola e apoia alunos em situação de vulnerabilidade, fortalecendo o vínculo entre a instituição e a comunidade e contribuindo para uma educação de qualidade.</p>
                <button className={styles.button} onClick={handleConhecaNosClick}>Conheça-nos</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boas-vindas e Gerenciar Campeonatos */}
      <section className={styles.welcomeSection}>
        <div className={styles.linhavermelha} />
        <h2><span>Seja</span> <span className={styles.highligext}>bem vindo(a)!</span></h2>
        <div className={styles.championshipsManagement}>
          <div className={styles.championshipCard} onClick={handleGerenciarCampeonatosClick}>
            <div className={styles.trophyImage}>
              <FaArrowRight size={50} className={styles.icon} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.p2}>Gerenciar Campeonatos</h3>
            </div>
          </div>
          <div className={styles.emptyCard} onClick={handleFeedbackClick}>
            <FaArrowRight size={50} className={styles.icon2} />
            <p className={styles.pcard2}>feedback</p>
          </div>
        </div>
      </section>
    </div>
  );
}
