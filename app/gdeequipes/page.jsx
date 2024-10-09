"use client";

import styles from './page.module.css';
import logo from "../assets/imagens/logo.jpg";
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';

const GdeEquipes = () => {

    return (
        <div className={styles.main_div}>
            <Image src={logo} id={styles.logo} width={130} height={130} />
            <div className={styles.container_times}>
                <div className={styles.title_container}>
                    <h1 className={styles.title}>Gerenciamento de equipes</h1>
                    <div className={styles.redLine}></div>
                </div>

                <div className={styles.search_container}>
                    <div className={styles.input_container}>
                        <input type="Search" id="Search" name="Search" required />
                        <label htmlFor="Search">
                            <FaSearch />
                        </label>
                    </div>
                    <div className={styles.blackline}></div>
                </div>


                <div className={styles.times}>
                    <h2>Equipes Aprovadas</h2>
                    <ul className={styles.listUl}>

                        <li className={styles.cards_time}>

                            <div className={styles.card_top}>
                                {/* <p className={styles.exit_button}>X</p> */}
                                <div className={styles.gray_circule}></div>
                            </div>

                            <div className={styles.info_card}>
                                <h3>Equipe 03</h3>
                                <h4>Membros:</h4>
                                <p>Sla</p>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default GdeEquipes;