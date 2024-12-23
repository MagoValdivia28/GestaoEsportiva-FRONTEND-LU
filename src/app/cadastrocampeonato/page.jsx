"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { createCampeonato } from '@/src/actions/api';
import { useContext, useState } from 'react';
import PopUpError from '@/src/app/components/PopUpError';
import Header from '../components/header/header';
import { AuthContext } from '@/src/contexts/AuthContext';
import ButtonBack from '../components/ButtonBack/page';
import Footer from '../components/footer/page';

const CadastroCampeonato = () => {
  const router = useRouter();
  const [nome, setNome] = useState(null);
  const [data_inicio, setDataInicio] = useState(null);
  const [data_final, setDataFinal] = useState(null);
  const [error, setError] = useState(null);
  const { acessToken } = useContext(AuthContext);

  const handleSubmit = async () => {
    if (!nome || !data_inicio || !data_final) {
        setError({ message: 'Preencha todos os campos!' });
        setTimeout(() => {
            setError(null);
        }, 2000); // Reduced timeout
    } else {
        console.log(acessToken);

        const response = await createCampeonato(nome, data_inicio, data_final, acessToken);
        setError(response);
        setTimeout(() => {
            setError(null);
            if (response.status === "sucess") {
                router.push('/campeonato');
            } else if (response.message == "Acesso não autorizado" || response.message == "Token não autorizado") {
                router.push('/login');
            }
        }, 2000); // Reduced timeout
    }
};

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>
          <ButtonBack />
          <span className={styles.titleRed}>Cadastro</span>
          <span className={styles.titleBlack}>de Campeonatos</span>
        </h1>
        <div className={styles.form}>

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
      <Footer />
    </>
  );
};

export default CadastroCampeonato;