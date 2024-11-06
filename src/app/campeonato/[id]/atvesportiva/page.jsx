"use client"
import styles from './page.module.css';
import List_times from '@/src/app/components/list_times/list_times';
import CardModality from '@/src/app/components/CardModality/page';
import { useRouter } from 'next/navigation'; // Importando useRouter
import { useEffect, useState } from 'react';
import Header from '@/src/app/components/header/header';
import { getAPI } from '@/src/actions/api';
import { useParams } from 'next/navigation';

const Gestaoesportes = () => {
  const { id } = useParams();

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await getAPI('times/', undefined, { campeonato_id: id });
      if (response.message == 'Time não encontrado') {
        setTeams([]);
      } else {
        setTeams(response);
      }
    };
    fetchTeams();
  }, []);



  return (
    <div className={styles.main_div}>
      <Header />

      <div className={styles.container}>
        <h2 className={styles.h2Title}> Placar do evento atual</h2>

        <List_times teams={teams} />
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