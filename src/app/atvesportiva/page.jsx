"use client"
import styles from './page.module.css';
import logo from "../../../assets/imagens/logo.png";
import Image from 'next/image';
import List_times from '../components/list_times/list_times';
import CardModality from '../components/CardModality/page';
import { useRouter } from 'next/navigation'; // Importando useRouter
import { useEffect, useState } from 'react';

const Gestaoesportes = () => {

  const router = useRouter(); // Inicializando o roteador
  const [error, setError] = useState(null);
  const [campeonato, setCampeonato] = useState(null);

  return (
    <div className={styles.main_div}>
      <div className={styles.div_img}>
        <Image src={logo} id={styles.logo} width={130} height={130} />
      </div>

      <div className={styles.container}>
        <h2 className={styles.h2Title}> Placar do evento atual</h2>

        <List_times />
      </div>


      <div className={styles.modalidade_container}>
        <div className={styles.modalidade_container_title}>
          <h2 className={styles.h2modalidade}>Modalidades</h2>
          <div className={styles.redLine}></div>
        </div>

        <div className={styles.modalidades}>
          <CardModality title="Futebol" />
          <CardModality title="Vôlei" />
          <CardModality title="Basquete" />
        </div>


        {/* dps o night faz o carrosel de modalidades */}
      </div>

    </div>
  );
};

export default Gestaoesportes;                                                                  