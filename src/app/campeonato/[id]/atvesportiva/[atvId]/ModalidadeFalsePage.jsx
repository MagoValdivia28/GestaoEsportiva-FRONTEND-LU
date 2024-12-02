
"use client";

import styles from "./page.module.css";
import VDP from "@/src/app/components/vdp/vdp";
import Confrontos from "@/src/app/components/confrontos/confrontos";
import { useEffect, useState } from "react";
import { getAPI } from "@/src/actions/api";
import { useParams } from "next/navigation";
import CreateConfronto from "@/src/app/components/CreateConfronto/page";


const ModalidadeFalsePage = ({ teams }) => {
  const [popUp, setPopUp] = useState(false);
  const [partidas, setPartidas] = useState([]);
  const { atvId } = useParams();

  const fetchPartidas = async () => {
    const response = await getAPI("partidas/confrontos/", atvId);
    setPartidas(response.data);
  };

  useEffect(() => {
    fetchPartidas();
  }, [atvId]);

  return (
    <div>
      <div className={styles.list_container}>
        <VDP teams={teams} />
      </div>
      <h2 className={styles.h2Title}>Confrontos</h2>
      <ul className={styles.confrontos_container}>
        {
          partidas.length > 0 ? partidas.map((partida, index) => (
            <Confrontos key={partida.id} idPartida={partida.id} data={partida.data} confrontos={partida.confrontos} />
          )) : <button onClick={() => setPopUp(true)} className={styles.btn}>+</button>
        }
      </ul>
      {
        popUp && (
          <CreateConfronto onClick={() => setPopUp(false)} />
        )
      }
    </div>
  );
};

export default ModalidadeFalsePage;