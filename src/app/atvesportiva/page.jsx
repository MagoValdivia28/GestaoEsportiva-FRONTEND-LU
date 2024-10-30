"use client"
import styles from './page.module.css';
import logo from "../../../assets/imagens/logo.png";
import Image from 'next/image';
import List_times from '../components/list_times/list_times';
import Header from '../components/header/header';

const Gestaoesportes = () => {

  return (
    <div className={styles.main_div}>
      <Header />

      <div className={styles.container}>
        <h2 className={styles.h2Title}> Placar do evento atual</h2>

        <List_times />
      </div>


      <div className={styles.modalidade_container}>
        <div className={styles.modalidade_container_title}>
          <h2 className={styles.h2modalidade}>Modalidades</h2>
          <div className={styles.redLine}></div>
        </div>


        {/* dps o night faz o carrosel de modalidades */}
      </div>

    </div>
  );
};

export default Gestaoesportes;                                                                  