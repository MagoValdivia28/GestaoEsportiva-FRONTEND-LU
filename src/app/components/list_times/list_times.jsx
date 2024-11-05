"use client";

import styles from './list_times.module.css';
// import logo from "../assets/imagens/logo.png";
import Image from 'next/image';
import { FaRegSadTear } from "react-icons/fa";
import { useEffect, useState } from 'react';
const List_times = ({ teams }) => {
    console.log(teams);

    return (
        <ul className={styles.placar}>
            <div className={styles.redline}></div>
            <div className={styles.equipesXPontos}>
                <h3 className={styles.infoPlacar}>Equipes</h3>
                <h3 className={styles.infoPlacar}>Pontos</h3>
            </div>
            {
                teams.length > 0 ? teams.map((team, index) => {
                    return (
                        <li className={styles.equipes}>
                            <div className={styles.info_container}>
                                <h3 className={styles.info}>{team.nome}</h3>
                                <h3 className={styles.info}>{team.pontos}</h3>
                            </div>
                            <div className={styles.grayline}></div>
                        </li>
                    )
                }) : (
                    <div className={styles.noTeams}>
                        <FaRegSadTear size={80} color="#d7d7d7" />
                        <h3 className={styles.noTeamsText}>Nenhum time cadastrado</h3>
                    </div>
                )
            }
        </ul>
    )
}
export default List_times
