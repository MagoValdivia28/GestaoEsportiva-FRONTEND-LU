"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';
import logo from "../../../assets/imagens/logo.png";
import { FaUser } from 'react-icons/fa';
import { LiaArrowCircleLeftSolid } from "react-icons/lia";
import Link from 'next/link';
import { createCampeonato } from '@/src/actions/api';
import { useState } from 'react';
import PopUpError from '@/src/app/components/PopUpError';
import Header from '../components/header/header';

const CadastroCampeonato = () => {
  const router = useRouter();
  const [nome, setNome] = useState(null);
  const [data_inicio, setDataInicio] = useState(null);
  const [data_final, setDataFinal] = useState(null);
  const [error, setError] = useState(null);

  const handleProfileClick = () => {
    alert('Perfil clicado!');
  };

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  const handleSubmit = async () => {
    if (!nome || !data_inicio || !data_final) {
      setError({ message: 'Preencha todos os campos!' });
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      const response = await createCampeonato(nome, data_inicio, data_final);
      setError(response);
      setTimeout(() => {  
        setError(null);
        if (response.status === "sucess") {
          router.push('/campeonato');
        }
      }, 3000);
    }
  };

  return (
    <>
        <Header />
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.backtohome}>
            <Link className={styles.backButton} onClick={handleBack} href={"#"}>
              <LiaArrowCircleLeftSolid size={30} />
            </Link>
            <p className={styles.txt1}>Gerenciamento de Campeonatos</p>
          </div>

          <div className={styles.formdiv1}>
            <label htmlFor="nome">Nome</label>
            <input onChange={(e) => setNome(e.target.value)} type="text" id="nome" name="nome" required />
          </div>

          <div className={styles.divdatas}>
            <div className={styles.formdiv2}>
              <label htmlFor="descricao">Data início</label>
              <input onChange={(e) => setDataInicio(e.target.value)} type="date" id="dateStart" name="dateStart" required />
            </div>
            <div className={styles.formdiv3}>
              <label htmlFor="descricao">Data Término</label>
              <input onChange={(e) => setDataFinal(e.target.value)} type="date" id="dateEnd" name="daeEnd" required />
            </div>
          </div>


          <button onClick={handleSubmit} className={styles.submitButton}>Cadastrar</button>
        </div>
      </div>
      {error && <PopUpError error={error} />}
    </>
  );
};

export default CadastroCampeonato;