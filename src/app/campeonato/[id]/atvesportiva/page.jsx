'use client';
import { useRouter } from 'next/navigation'; // Importando useRouter
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import List_times from '@/src/app/components/list_times/list_times';
import CardModality from '@/src/app/components/CardModality/page';
import Header from '@/src/app/components/header/header';
import { getAPI } from '@/src/actions/api';
import { useParams } from 'next/navigation';
import FormularioModalidade from '@/src/app/components/PopUpModalidade';

const Gestaoesportes = () => {
  const { id } = useParams();
  const [teams, setTeams] = useState([]);
  const [modalities, setModalities] = useState([]);
  const [showModal, setShowModal] = useState(false); // Novo estado para controle do modal

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

  useEffect(() => {
    const fetchModalidades = async () => {
      const data = await getAPI('modalidades/campeonato/', id);
      console.log(data);
      setModalities(data);
      
    }
    fetchModalidades();
  }, []);

  const handleAddModality = () => {
    setShowModal(true); // Mostra o modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Fecha o modal
  };

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
        {
            modalities.length > 0 && modalities.map((modality) => (
              <CardModality key={modality.id} title={modality.nome_modalidade} />
            )) 
          }
          <button onClick={handleAddModality} className={styles.addButton}>+</button>
        </div>
      </div>

      {/* Pop-up modal */}
      <FormularioModalidade isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Gestaoesportes;
