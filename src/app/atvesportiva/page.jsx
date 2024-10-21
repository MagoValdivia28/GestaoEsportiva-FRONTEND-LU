"use client"
import styles from './page.module.css';
import logo from "../../../assets/imagens/logo.png";
import Image from 'next/image';
import { List } from '@mui/material';
import List_times from '../components/list_times/list_times';

const Gestaoesportes = () => {

  return (
    <div className={styles.main_div}>
      <div className={styles.div_img}>
        <Image src={logo} id={styles.logo} width={130} height={130} />
      </div>

      <div className={styles.container}>
        <h2> Placar do evento atual</h2>

        <List_times />
      </div>

    </div>

  );
};

export default Gestaoesportes;                                                                  