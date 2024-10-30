"use client";

import styles from './page.module.css';
// import logo from "../assets/imagens/logo.png";
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Equipes from '../components/equipes/equipes';

const GdeEquipes = () => {
    return (
        <div className={styles.main_div}>
            {/* <Image src={logo} id={styles.logo} width={130} height={130} /> */}
            <div className={styles.container_times}>
                <h1 className={styles.title}>
                    <span className={styles.titleRed}>Gerenciamento</span>
                    <span className={styles.titleBlack}> de Equipe</span>
                </h1>
                <div className={styles.line}></div>
            </div>

            <div className={styles.search_container}>
                <div className={styles.input_container}>
                    <input type="search" id="Search" name="Search" required />
                    <label htmlFor="Search">
                        <FaSearch />
                    </label>
                </div>
                <div className={styles.blackline}></div>
            </div>

            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Aprovadas</h2>
                <Equipes />
            </div>

            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Pendentes</h2>
                <Equipes />
            </div>

            <div className={styles.times}>
                <h2 className={styles.title}>Equipes Rejeitadas</h2>
                <Equipes />
            </div>

            <button className={styles.button}>Adicionar Equipe</button>
        </div>
    );
}

export default GdeEquipes;
