"use client"
import styles from './page.module.css';
import { useState } from 'react';
import { AuthContext } from '@/src/contexts/AuthContext';
import { useContext } from 'react';
import logo from "@/assets/imagens/logo.png";
import Image from 'next/image';
import { useRouter } from 'next/router';

const Gereciamento = () => {
    const router = useRouter();
    const { user } = useContext(AuthContext);

    return (
      <div className={styles.divpai}>
        <Image src={logo} id={styles.logo} width={130} height={130} />
        <h1 className={styles.titulo}>Gerenciamento de Esportes</h1>
        <div className={styles.divfilho}>
          <button className={styles.botao} onClick={() => router.push('/esportes/cadastro')}>Cadastrar Esporte</button>
          <button className={styles.botao} onClick={() => router.push('/esportes/listagem')}>Listar Esportes</button>
        </div>
        </div>
    );
}

export default Gereciamento;