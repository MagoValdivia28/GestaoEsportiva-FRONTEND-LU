'use client'
import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import equipe from '../../../assets/imagens/imgEquipe.jpg';
import zambon from '../../../assets/imagens/Zambon.jpg';
import cocco from '../../../assets/imagens/fervas.jpeg';
import joao from '../../../assets/imagens/Night.jpeg';
import fp from '../../../assets/imagens/fp.jpeg';
import gomes from '../../../assets/imagens/pravel.jpeg';
import Header from '../components/header/header';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from '../../../assets/imagens/Novagenix.png'

export default function Sobre() {
  return (
    <div className={styles.container}>
      <Header />
    
      <div className={styles.cardEquipe}>


        <div className={styles.cardImg}>
        <Image src={logo} className={styles.fotoEquipe1} />


        </div>
        <hr className={styles.linha} />

        <div className={styles.div_cards}>


        <div className={styles.card}>
         <div className={styles.img_container}>
              <Image className={styles.fotoMembro} src={fp} />
            </div>

            <h4 className={styles.nomeMembro}>Felipe Pedro</h4>

            <hr className={styles.linha0} />

            <div className={styles.info_card}>
              <div className={styles.texts_container}>
              <div className={styles.icon_containerweb}>
              <Link href="https://github.com/MagoValdivia28" passHref target='blank'>
              <FaGithub size={25} color="#000000" />
              </Link>
              <Link href="https://www.instagram.com/felipe_spedro/?igsh=MTFmNGJmd253M3l2eQ%3D%3D#" passHref target='blank'>
              <FaInstagram size={25} color='#000000'/>
              </Link>
              </div>
                <p className={styles.textMembro}>  Felipe é um membro com uma personalidade forte e um espírito de
                  liderança marcante, ele se destaca em qualquer desafio que enfrenta.
                  Fazendo dele uma peça chave para o nosso sucesso coletivo.
                </p>
              </div>
            </div>
         </div>


        <div className={styles.card}>
         <div className={styles.img_container}>
              <Image className={styles.fotoMembro} src={zambon} />
            </div>

            <h4 className={styles.nomeMembro}>Matheus Zambon</h4>

            <hr className={styles.linha0} />

            <div className={styles.info_card}>
              <div className={styles.texts_container}>
              <div className={styles.icon_containerweb}>
              <Link href="https://github.com/Matheuscosta06" passHref target='blank'>
              <FaGithub size={25} color="#000000" />
              </Link>
              <Link href="https://www.instagram.com/matheus_zambon/?igsh=dnR2ZXh5a3RobHdo#" passHref target='blank'>
              <FaInstagram size={25} color='#000000'/>
              </Link>
              </div>
                <p className={styles.textMembro}>Matheus Zambon é o membro mais animado e o melhor em trabalho em
                  equipe. Sua energia contagiante e habilidade para colaborar
                  eficazmente com todos tornam ele um elemento essencial para o nosso
                  sucesso coletivo.
                </p>
              </div>
            </div>
        </div>

        <div className={styles.card}>
         <div className={styles.img_container}>
              <Image className={styles.fotoMembro} src={joao} />
            </div>

            <h4 className={styles.nomeMembro}>João Santos</h4>

            <hr className={styles.linha0} />

            <div className={styles.info_card}>
              <div className={styles.texts_container}>
              <div className={styles.icon_containerweb}>
              <Link href="https://github.com/joaosantos564" passHref target='blank'>
              <FaGithub size={25} color="#000000" />
              </Link>
              <Link href="https://www.instagram.com/joaoosntx/?igsh=MWNpNmxiYXhqajZycg%3D%3D#" passHref target='blank'>
              <FaInstagram size={25} color='#000000'/>
              </Link>
              </div>
                <p className={styles.textMembro}>João é o membro mais criativo e cuida dos Designs e usabilidades do site. Seu perfil criativo agrega muito ao grupo, seja pela organização ou ideiais criativos.
                </p>
              </div>
            </div>
        </div>

        <div className={styles.card}>
         <div className={styles.img_container}>
              <Image className={styles.fotoMembro} src={gomes} />
            </div>

            <h4 className={styles.nomeMembro}>Matheus Gomes</h4>

            <hr className={styles.linha0} />

            <div className={styles.info_card}>
              <div className={styles.texts_container}>
              <div className={styles.icon_containerweb}>
              <Link href="https://github.com/ElMatheus" passHref target='blank'>
              <FaGithub size={25} color="#000000" />
              </Link>
              <Link href="https://www.instagram.com/prv.mathevss/?igsh=MTJxb3U2djR0cmdjYg%3D%3D" passHref target='blank'>
              <FaInstagram size={25} color='#000000'/>
              </Link>
              </div>
                <p className={styles.textMembro}> Matheus Gomes é um verdadeiro gênio em programação. Com um talento
                  excepcional para desenvolver soluções, ele combina brilhantismo
                  técnico com uma abordagem colaborativa que enriquece todo o time.
                </p>
              </div>
            </div>
        </div>

        <div className={styles.card}>
         <div className={styles.img_container}>
              <Image className={styles.fotoMembro} src={cocco} />
            </div>

            <h4 className={styles.nomeMembro}>Matheus Carvalho</h4>

            <hr className={styles.linha0} />

            <div className={styles.info_card}>
              <div className={styles.texts_container}>
              <div className={styles.icon_containerweb}>
               <Link href="https://github.com/Fervalinhos" passHref target='blank'>
              <FaGithub size={25} color="#000000" />
              </Link>
              <Link href="https://www.instagram.com/fervass.mt/?igsh=MXB4bWowNGw5a2w3bA%3D%3D" passHref target='blank'>
              <FaInstagram size={25} color='#000000'/>
              </Link>
              </div>
                <p className={styles.textMembro}>   Matheus Carvalho é o mestre da lógica na nossa equipe. Com um
                  conhecimento profundo em diversas tecnologias, ele é a referência na
                  resolução de problemas complexos. Sua expertise técnica é
                  indispensável para o nosso sucesso.
                </p>
              </div>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
}


