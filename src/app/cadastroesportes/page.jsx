"use client"
import styles from './page.module.css';
import Image from 'next/image';
import logo from "../../../assets/imagens/logo.png";
import { FaUser } from 'react-icons/fa';
import { MdOutlineUploadFile } from "react-icons/md";
import { LiaArrowCircleLeftSolid } from "react-icons/lia";
import Link from 'next/link';

const CadastroEsportes = () => {

  const handleProfileClick = () => {
    alert('Perfil clicado!');
  };

  return (
    <div className={styles.divpai}>
      <Image src={logo} id={styles.logo} width={100} height={100} />
      <button className={styles.profileButton} onClick={handleProfileClick}>
        <FaUser size={20} />
      </button>
      <form className={styles.form}>
        <div className={styles.backtohome}>
          <Link className={styles.backButton} href={"./"}>
            <LiaArrowCircleLeftSolid size={30} />
          </Link>
          <p className={styles.txt1}>Gerenciamento de atividades desportivas</p>
        </div>

        <div className={styles.formdiv1}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div className={styles.formdiv2}>
          <label htmlFor="descricao">Tipo</label>
          <input type="text" id="descricao" name="descricao" required />
        </div>

        <p className={styles.txt}>Upload de Imagem</p>

        <button className={styles.putpicture}>
          <MdOutlineUploadFile size={90} />
        </button>

        <button type="submit" className={styles.submitButton}>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroEsportes;