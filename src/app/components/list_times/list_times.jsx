"use client";

import styles from './list_times.module.css';
// import logo from "../assets/imagens/logo.png";
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
const List_times = ({teams}) => {

    return (
        <ul className={styles.placar}>
            <div className={styles.redline}></div>
            <div className={styles.equipesXPontos}>
                <h3 className={styles.infoPlacar}>Equipes</h3>
                <h3 className={styles.infoPlacar}>Pontos</h3>
            </div>
            {
                teams.map((team) => (
                    <li className={styles.equipes}>
                        <div className={styles.info_container}>
                            <h3 className={styles.info}>{team.nome}</h3>
                            <h3 className={styles.info}>{team.pontos}</h3>
                        </div>
                        <div className={styles.grayline}></div>
                    </li>
                ))
            }
        </ul>
    )
}
export default List_times
