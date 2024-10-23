'use client';
import styles from './page.module.css'; 
import hometopo from '../../../assets/imagens/hometopo.png';
import logo from '../../../assets/imagens/logo.png';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import Card from '../components/Card/page';
import { useRouter } from 'next/navigation'; // Importando useRouter

export default function Home() {
  const router = useRouter(); // Inicializando o roteador

  // Função para lidar com o clique no card "Adicionar"
  const handleAddClick = () => {
    router.push('/cadastrocampeonato'); // Redirecionando para a página de cadastro
  };

  return (
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
        </div>
      </main>
    </div>
  );
}
