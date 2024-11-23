'use client';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
import styles from './page.module.css';
import Header from './components/header/header';
import { AuthContext } from '@/src/contexts/AuthContext';
import { useContext } from 'react';


export default function Home() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const handleConhecaNosClick = () => {
    router.push('/aapm'); // Navigate to the "Conheça-nos" page
  };

  const handleGerenciarCampeonatosClick = () => {
    router.push('/campeonato');
  };

  const handleFeedbackClick = () => {
    router.push('/feedback');
  };

  const handlesobreClick = () => {
    router.push('/sobre');
  };

  return (
    <div className={styles.homeContainer}>

      <section className={styles.heroSection}>
        <div className={styles.blur}>
          <div className={styles.heroOverlay}>
            <Header />
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
        {
          user.nome ? <h2><span>Seja</span> <span className={styles.highligext}>bem vindo(a) {user.nome}!</span></h2> : <h2><span>Seja</span> <span className={styles.highligext}>bem vindo(a)!</span></h2>
        }
        <div className={styles.championshipsManagement}>
          <div className={styles.championshipCard} onClick={handleGerenciarCampeonatosClick}>
            <div className={styles.trophyImage}>
              <FaArrowRight size={50} className={styles.icon} />
              <p className={styles.p2}>Gerenciar Campeonatos</p>
            </div>

          </div>
          <div className={styles.emptyCard} onClick={handleFeedbackClick}>
            <FaArrowRight size={50} className={styles.icon2} />
            <p className={styles.pcard2}>feedback</p>
          </div>

          <div className={styles.sobrecard} onClick={handlesobreClick}>
            <FaArrowRight size={50} className={styles.icon2} />
            <p className={styles.pcard2}>Sobre Nós</p>
          </div>
        </div>
      </section>
    </div>
  );
}
