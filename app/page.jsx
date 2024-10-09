'use client';
import Image from 'next/image';
import logo from './assets/imagens/logo.jpg';
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
            Perfil
          </button>
        </div>
        <div>
          <h1>Seja bem-vindo!</h1>
          <h2>Entre com sua conta</h2>
        </div>
        <div>
          <button className={styles.button}>Conheça-nos</button>
        </div>
      </div>
    </main>
  );
}