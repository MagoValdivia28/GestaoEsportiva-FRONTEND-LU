"use client";

import styles from "./page.module.css";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbCoins } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import imgtop from "../../../assets/imagens/ImgAapm.png";
import imgfut from "../../../assets/imagens/imgContainer.png";
import imgVolei from "../../../assets/imagens/boladevoleift.jpg";
import Header from "../components/header/header";

const Aapm = () => {
    return (
        <main className={styles.main_container}>
            <div className={styles.header_container}>
                <Header className={styles.header} />
                <Image src={imgtop} className={styles.header_image} />
            </div>

            <section className={styles.about_section}>
                <div className={styles.text_container}>
                    <h1>Bem-vindo à AAPM</h1>
                    <p>
                        A AAPM é a Associação de Pais que contribui para o crescimento
                        escolar e esportivo dos alunos. Trabalhamos para oferecer eventos
                        de qualidade, desde competições esportivas até celebrações culturais.
                    </p>
                </div>

            </section>
            <section className={styles.benefits_section}>
                <h2>Nossos Benefícios</h2>
                <div className={styles.benefits_container}>
                    <div className={styles.benefit_card}>
                        <IoInformationCircleOutline className={styles.icon} />
                        <h3>Eventos Inesquecíveis</h3>
                        <p>
                            Organizamos competições esportivas, palestras e festividades para
                            enriquecer o ambiente escolar.
                        </p>
                    </div>
                    <div className={styles.benefit_card}>
                        <TbCoins className={styles.icon} />
                        <h3>Apoio Financeiro</h3>
                        <p>
                            Investimos em materiais, uniformes e infraestrutura para garantir
                            o sucesso dos eventos.
                        </p>
                    </div>
                    <div className={styles.benefit_card}>
                        <CgProfile className={styles.icon} />
                        <h3>Comunidade Unida</h3>
                        <p>
                            Unimos pais, alunos e professores para criar um ambiente de apoio
                            e crescimento mútuo.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.about_section}>
                <div className={styles.text_container}>
                    <h1>Sobre Nós</h1>
                    <p>
                        Nossa missão é oferecer suporte à escola, promovendo eventos de
                        qualidade que incentivem o aprendizado, o esporte e o bem-estar dos
                        alunos. Trabalhamos para construir memórias e experiências únicas.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Aapm;
