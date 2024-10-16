'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaUser, FaUsers, FaTrophy, FaComments } from 'react-icons/fa';
import logo from '../../assets/imagens/logo.png';
import styles from './page.module.css';
import GdeEquipes from './gdeequipes/page';

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
    <main className={styles.container}>
      <div className={styles.opacity}>
        <div className={styles.top}>
          <Image src={logo} alt="Logo" width={100} height={100} className={styles.logo} />
          <button className={styles.profileButton} onClick={handleProfileClick}>
            <FaUser size={20} className={styles.pb2} />
          </button>
        </div>
        <div className={styles.text}>
          <p className={styles.h1}>AAPM</p>
          <p className={styles.h2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id finibus ipsum.
            Phasellus dapibus sed massa et finibus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis id finibus ipsum. Phasellus dapibus sed massa et finibus.
            Sed bibendum turpis et lectus tempor pulvinar.
          </p>
        </div>
        <div className={styles.divbutton}>
          <button className={styles.button} onClick={handleConhecaNosClick}>Conheça-nos</button>
        </div>
      </div>
  
      <div className={styles.container2}>
        <div className={styles.cards} onClick={() => router.replace('/gdeequipes')}>
          <FaUsers size={30} className={styles.iconC2} />
          <p className={styles.p2}>Gerenciamento de Equipe</p>
        </div>
        <div className={styles.cards} onClick={handleGerenciamentoAtividadesClick}>
          <FaTrophy size={30} className={styles.iconC2} />
          <p className={styles.p2}>Gerenciamento de Atividades Esportivas</p>
        </div>
        <div className={styles.cards} onClick={handleGerenciamentoComentariosClick}>
          <FaComments size={30} className={styles.iconC2} />
          <p className={styles.p2}>Gerenciamento de Comentários</p>
        </div>
      </div>
    </main>
  );
}