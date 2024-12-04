"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { generateConfrontos } from "@/src/actions/api";
import { getAPI } from "@/src/actions/api";
import { updateConfronto } from "@/src/actions/api";
import { useParams } from "next/navigation";
import { AuthContext } from '@/src/contexts/AuthContext';
import PopUpError from '@/src/app/components/PopUpError';
import Guarantee from '@/src/app/components/GuaranteePopUp';
import Footer from "@/src/app/components/footer/page";

const ModalidadeTruePage = ({ modalidade, teams }) => {
  const { user, acessToken } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [dateInput, setDateInput] = useState(null);
  const [selectedWinner, setSelectedWinner] = useState(null);
  const [partidasData, setPartidasData] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const { atvId } = useParams();
  const [popUpMessage, setPopUpMessage] = useState(null);
  const [popUpGuarantee, setPopUpGuarantee] = useState(null);

  const handleAddWinner = () => {
    setShowModal(true);
  };

  const handleSelectWinner = async (confrontoParams) => {
    const data = {
      winner: true,
      tie: false,
      updAtIdUser: user.id
    };
    const response = await updateConfronto(confrontoParams.confrontoid, data, acessToken);
    if (response.status == "sucess") {
      setSelectedWinner(confrontoParams.time);
      setPopUpGuarantee(false);
    } else {
      setPopUpMessage({
        status: "error",
        message: response.message,
      });
      setTimeout(() => {
        setPopUpMessage(null);
      }, 2000);
    }
  };

  const handlePopUps = (confrontoParams) => {
    setShowModal(false);
    setPopUpGuarantee(confrontoParams);
  }

  const handleGenerate = async () => {
    if (!dateInput) {
      setPopUpMessage({
        status: "error",
        message: "Por favor, selecione uma data.",
      });
      setTimeout(() => {
        setPopUpMessage(null);
      }, 2000);
      return;
    } else {
      const response = await generateConfrontos(dateInput, '', user.id, atvId, acessToken);
      if (response.message == "Confrontos gerados com sucesso") {
        setPopUpMessage({
          status: "sucess",
          message: "Confrontos gerados com sucesso.",
        });
        setTimeout(() => {
          setPopUpMessage(null);
          window.location.reload();
        }, 2000);
      } else {
        setPopUpMessage({
          status: "error",
          message: response.message,
        });
        setTimeout(() => {
          setPopUpMessage(null);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    const fetchConfrontos = async () => {
      const response = await getAPI("partidas/confrontos/", atvId);
      setPartidasData(response);
    };
    fetchConfrontos();
  }, []);

  useEffect(() => {
    const fetchWinner = async () => {
      const response = await getAPI("confrontos/modalidade/", atvId);
      if (response.status == "sucess") {
        setSelectedWinner(response.confrontos[0]);
      }
    }
    fetchWinner();
  }, []);

  return (
    <div>
      {!selectedWinner && (
        <div className={styles.addWinnerContainer}>
          {partidasData && partidasData.total > 0 ? (
            <button className={styles.addWinnerButton} onClick={handleAddWinner}>
              Adicionar Vencedor
            </button>
          ) : (
            <button className={styles.addWinnerButton} onClick={() => setPopUp(true)}>
              Definir Data
            </button>
          )}
        </div>
      )}

      {selectedWinner && (
        <div className={styles.winnerDisplay}>
          <h3>Vencedor: {selectedWinner.nome}</h3>
          <div className={styles.winnerInfo}>
            <Image
              src={selectedWinner.logo}
              alt={`Logo do time ${selectedWinner.nome}`}
              width={200}
              height={200}
              className={styles.winnerLogo}
            />
            <span className={styles.winnerName}>{selectedWinner.nome}</span>
          </div>
          <p>Parabéns ao time vencedor!</p>
        </div>
      )}
      <div className={styles.timesContainer}>
        <h2 className={styles.timesTitle}>Times Participantes:</h2>
        <ul className={styles.teamList}>
          {teams.map((team, index) => (
            <li key={index} className={styles.teamItem}>
              <Image
                src={team.logo}
                alt={`Logo do time ${team.nome}`}
                width={100}
                height={100}
                className={styles.teamLogo}
              />
              <span className={styles.teamName}>{team.nome}</span>
            </li>
          ))}
        </ul>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Selecione o time vencedor</h3>
            <ul>
              {partidasData && partidasData.data.map((confronto) => (
                <li
                  key={confronto.confrontos[0].confrontoid}
                  className={styles.modalTeamItem}
                  // onClick={() => handleSelectWinner(confronto.confrontos[0])}
                  onClick={() => handlePopUps(confronto.confrontos[0])}
                >
                  {confronto.confrontos[0].time.nome}
                </li>
              ))}
            </ul>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
      {popUp && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>Selecione a data do jogo</h3>
            <input onChange={(e) => setDateInput(e.target.value)} type="date" className={styles.modalInput} />
            <div className={styles.modalButtons}>
              <button className={styles.modalButton} onClick={handleGenerate}>Gerar</button>
              <button className={styles.modalButton} onClick={() => setPopUp(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
      {popUpGuarantee && (
        <Guarantee
          title="Confirmação"
          message={`Deseja confirmar o time ${popUpGuarantee.time.nome} como vencedor?`}
          close={() => setPopUpGuarantee(false)}
          advance={() => handleSelectWinner(popUpGuarantee)}
          txtAdvance="Confirmar"
        />
      )}
      {popUpMessage && <PopUpError error={popUpMessage} />}
    </div>
  );
};

export default ModalidadeTruePage;