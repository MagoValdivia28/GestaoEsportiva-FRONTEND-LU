"use client";

import styles from './vdp.module.css';
// import logo from "../assets/imagens/logo.png";
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
const VDP = () => {
    return (
        <ul className={styles.placar}>
            <div className={styles.redline}></div>
            <div className={styles.equipesXPontos}>
                <h3 className={styles.infoPlacar}>Equipes</h3>
                <div className={styles.VDP_container}>
                    <h3 className={styles.VDP}>Vitorias</h3>
                    <h3 className={styles.VDP}>Derrotas</h3>
                    <h3 className={styles.VDP}>Pontos</h3>
                </div>
            </div>
            <li className={styles.equipes}>
                <div className={styles.info_container}>
                    <h3 className={styles.info}>Equipe 01</h3>
                    <div className={styles.VDPinfo_container}>
                        <h3 className={styles.VDPinfo}>00</h3>
                        <h3 className={styles.VDPinfo}>00</h3>
                        <h3 className={styles.VDPinfo}>000</h3>
                    </div>
                </div>
                <div className={styles.grayline}></div>
            </li>


            <li className={styles.equipes}>
                <div className={styles.info_container}>
                    <h3 className={styles.info}>Equipe 01</h3>
                    <div className={styles.VDPinfo_container}>
                        <h3 className={styles.VDPinfo}>00</h3>
                        <h3 className={styles.VDPinfo}>00</h3>
                        <h3 className={styles.VDPinfo}>000</h3>
                    </div>
                </div>
                <div className={styles.grayline}></div>
            </li>
        </ul>
    )
}

export default VDP