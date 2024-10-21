'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaUser, FaUsers, FaArrowRight, FaComments } from 'react-icons/fa';
import logo from '../../assets/imagens/logo.png';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const handleProfileClick = () => {
    alert('Perfil de safado clicked!');
  };
  
  const handleConhecaNosClick = () => {
    alert('Conheça-nos filho da puta clicked!');
  };

  const handleGerenciamentoAtividadesClick = () => {
    alert('Gerenciamento de Atividades Esportivas clicked!');
  };
  
  const handleGerenciamentoComentariosClick = () => {
    alert('Gerenciamento de Comentários clicked!');
  };
  
  return (
    <div className={styles.homeContainer}>
    {/* Seção de Introdução */}
    <section className={styles.heroSection}>
      <div className={styles.blur}>
      
        <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
        <div className={styles.logo}/>

        <div  className={styles.heroTitle}>
          <h1 style={{ fontSize: '50px' }}>AAPM</h1>
          <p style={{ fontSize: '17px' }}> A AAPM (Associação de Alunos, Pais e Mestres) do SENAI promove a cooperação entre alunos, pais, professores e a comunidade para aprimorar a formação dos estudantes. Ela organiza eventos e projetos, arrecada recursos para melhorar a escola e apoia alunos em situação de vulnerabilidade, fortalecendo o vínculo entre a instituição e a comunidade e contribuindo para uma educação de qualidade.</p>
          <button className={styles.button}>Conheça-nos</button>
        </div>
        </div>
      </div>
      </div>
    </section>

    {/* Boas-vindas e Gerenciar Campeonatos */}
    <section className={styles.welcomeSection}>
      <h2><span>Seja</span> <span className={styles.highlightText}>bem vindo(a)!</span></h2>
      <div className={styles.championshipsManagement}>
        <div className={styles.championshipCard}>
          <div className={styles.trophyImage}>
            <FaArrowRight size={50} className={styles.icon} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.p2}>Gerenciar Campeonatos</h3>
          </div>
        </div>
        <div className={styles.emptyCard}></div>
      </div>
    </section>
  </div>
    // <main className={styles.container}>
    //   <div className={styles.opacity}>
    //     <div className={styles.top}>
    //       <Image src={logo} alt="Logo" width={100} height={100} className={styles.logo} />
    //       <button className={styles.profileButton} onClick={handleProfileClick}>
    //         <FaUser size={20} className={styles.pb2} />
    //       </button>
    //     </div>
    //     <div className={styles.text}>
    //       <p className={styles.h1}>AAPM</p>
    //       <p className={styles.h2}>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id finibus ipsum.
    //         Phasellus dapibus sed massa et finibus. Lorem ipsum dolor sit amet, consectetur
    //         adipiscing elit. Duis id finibus ipsum. Phasellus dapibus sed massa et finibus.
    //         Sed bibendum turpis et lectus tempor pulvinar.
    //       </p>
    //     </div>
    //     <div className={styles.divbutton}>
    //       <button className={styles.button} onClick={handleConhecaNosClick}>Conheça-nos</button>
    //     </div>
    //   </div>

    //   <div className={styles.container2}>
    //     <div className={styles.cards} onClick={() => router.replace('/gdeequipes')}>
    //       <FaUsers size={30} className={styles.iconC2} />
    //       <p className={styles.p2}>Gerenciamento de Equipe</p>
    //     </div>
    //     <div className={styles.cards} onClick={handleGerenciamentoAtividadesClick}>
    //       <FaArrowRight size={30} className={styles.iconC2} />
    //       <p className={styles.p2}>Gerenciamento de Atividades Esportivas</p>
    //     </div>
    //     <div className={styles.cards} onClick={handleGerenciamentoComentariosClick}>
    //       <FaComments size={30} className={styles.iconC2} />
    //       <p className={styles.p2}>Gerenciamento de Comentários</p>
    //     </div>
    //   </div>
    // </main>
  );
}