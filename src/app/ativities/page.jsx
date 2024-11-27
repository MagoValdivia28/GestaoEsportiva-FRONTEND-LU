"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Header from '../components/header/header';


const atvsisoladas = () => {

  return (
    <div className={styles.container}>
      <Header />
      
      <div className={styles.winnerDisplay}>
        <h1 className={styles.title}>Dança das cadeiras</h1>
        <div className={styles.winnerList}>
          <div className={styles.winnerItem}>
            <h2>1º Lugar</h2>
            <p>Time A</p>
          </div>
          <div className={styles.winnerItem}>
            <h2>2º Lugar</h2>
            <p>Time B</p>
          </div>
          <div className={styles.winnerItem}>
            <h2>3º Lugar</h2>
            <p>Time C</p>
          </div>
        </div>
      </div>
      <button className={styles.addWinnerButton}>
        Adicionar Vencedor
      </button>
    </div>
  );
};

export default atvsisoladas;