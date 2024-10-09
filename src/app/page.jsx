'use client';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import logo from '../../assets/imagens/logo.jpg';
import styles from './page.module.css';

export default function Home() {
  const handleProfileClick = () => {
    alert('Perfil button clicked!');
  };

  return (
    <main className={styles.container}>
      <div className={styles.opacity}>
        <div className={styles.top}>
          <Image src={logo} alt="Logo" width={100} height={100} />
          <button className={styles.profileButton} onClick={handleProfileClick}>
            <FaUser size={20} />
          </button>
        </div>
        <div className={styles.text}>
          <p className={styles.h1}>AAPM</p>
          <p className={styles.h2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id finibus ipsum. Phasellus dapibus sed massa et finibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id finibus ipsum. Phasellus dapibus sed massa et finibus. Sed bibendum turpis et lectus tempor pulvinar.. Sed bibendum turpis et lectus tempor pulvinar.</p>
        </div>
        <div>
          <button className={styles.button}>Conheça-nos</button>
        </div>
      </div>
    </main>
  );
}