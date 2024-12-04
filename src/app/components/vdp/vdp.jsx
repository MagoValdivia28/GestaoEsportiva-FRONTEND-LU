"use client";

import styles from './vdp.module.css';
// import logo from "../assets/imagens/logo.png";
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';

const VDP = ({ teams }) => {
    console.log(teams);

    const calculatePoints = (team) => {
        return team.vitorias * 3 + team.empates * 1 + team.derrotas * 0;
    };

    return (
        <ul className={styles.placar}>
            <div className={styles.redline}></div>
            <div className={styles.equipesXPontos}>
                <h3 className={styles.infoPlacar}>Equipes</h3>
                <div className={styles.VDP_container}>
                    <h3 className={styles.VDP}>Vitorias</h3>
                    <h3 className={styles.VDP}>Empates</h3>
                    <h3 className={styles.VDP}>Derrotas</h3>
                    <h3 className={styles.VDP}>Pontos</h3>
                </div>
            </div>
            {
                teams.map((team, index) => (
                    <li className={styles.equipes} key={index}>
                        <div className={styles.info_container}>
                            <h3 className={styles.info}>{team.nome}</h3>
                            <div className={styles.VDPinfo_container}>
                                <h3 className={styles.VDPinfo}>{team.vitorias}</h3>
                                <h3 className={styles.VDPinfo}>{team.empates}</h3>
                                <h3 className={styles.VDPinfo}>{team.derrotas}</h3>
                                <h3 className={styles.VDPinfo}>{calculatePoints(team)}</h3>
                            </div>
                        </div>
                        <div className={styles.grayline}></div>
                    </li>
                ))
            }
        </ul>
    )
}

export default VDP