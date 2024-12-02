
"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

const ModalidadeTruePage = ({ modalidade, teams }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWinner, setSelectedWinner] = useState(null);

  const handleAddWinner = () => {
    setShowModal(true);
  };

  const handleSelectWinner = (team) => {
    setSelectedWinner(team);
    setShowModal(false);
  };

  return (
    <div>
      {!selectedWinner && (
        <div className={styles.addWinnerContainer}>
          <button className={styles.addWinnerButton} onClick={handleAddWinner}>
            Adicionar Vencedor
          </button>
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
              {teams.map((team, index) => (
                <li
                  key={index}
                  className={styles.modalTeamItem}
                  onClick={() => handleSelectWinner(team)}
                >
                  {team.nome}
                </li>
              ))}
            </ul>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalidadeTruePage;