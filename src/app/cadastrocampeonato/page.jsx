"use client"  
import styles from './page.module.css';
import Image from 'next/image';
import logo from "../../../assets/imagens/logo.png";
import aapm from "../../../assets/imagens/aapm.png";
import { FaUser } from 'react-icons/fa';
import { LiaArrowCircleLeftSolid } from "react-icons/lia";
import Link from 'next/link';

const CadastroCampeonato = () => {

  const handleProfileClick = () => {
    alert('Perfil clicado!');
  };

  return (
    <div className={styles.container}>
      <Image src={logo} id={styles.logo} width={100} height={100} />
      <button className={styles.profileButton} onClick={handleProfileClick}>
        <FaUser size={20} />
      </button>
      <form className={styles.form}>
        <div className={styles.backtohome}>
          <Link className={styles.backButton} href={"./"}>
            <LiaArrowCircleLeftSolid size={30} />
          </Link>
          <p className={styles.txt1}>Gerenciamento de Campeonatos</p>
        </div>

        <div className={styles.formdiv1}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" required />
        </div>

        <div className={styles.divdatas}>
          <div className={styles.formdiv2}>
            <label htmlFor="descricao">Data início</label>
            <input type="text" id="descricao" name="descricao" required />
          </div>
          <div className={styles.formdiv3}>
            <label htmlFor="descricao">Data Término</label>
            <input type="text" id="descricao" name="descricao" required />
          </div>
        </div>


        <button type="submit" className={styles.submitButton}>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCampeonato;