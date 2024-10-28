'use client';
import styles from './page.module.css';
import logo from '@/assets/imagens/logo.png';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { useRouter, useParams } from 'next/navigation'; 

const CampeonatoDetails = () => {
  const router = useRouter(); 
  const { id } = useParams();

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
          <h2>Gerenciamento de atividades</h2>
          <hr className={styles.separator} />
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <p>Gerenciamento de Equipe</p>
            </div>
            <div className={styles.card}>
              <p>Modalidades</p>
            </div>
          </div>
        </main>
      </div>
    
    </>
  );
}

export default CampeonatoDetails;