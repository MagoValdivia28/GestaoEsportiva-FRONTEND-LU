'use client'
import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import equipe from '../../../assets/imagens/imgEquipe.jpg';
import zambon from '../../../assets/imagens/Zambon.jpg';
import fervas from '../../../assets/imagens/fervas.jpeg';
import night from '../../../assets/imagens/Night.jpeg';
import fp from '../../../assets/imagens/fp.jpeg';
import pravel from '../../../assets/imagens/pravel.jpeg';
import Header from '../components/header/header';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Sobre() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.cardEquipe}>
        <hr className={styles.linha} />


        <div className={styles.cardImg}>
          <Image src={equipe} className={styles.fotoEquipe} />

        </div>
        <hr className={styles.linha} />

        <div className={styles.div_cards}>


        <div className={styles.card0}>
         <div className={styles.img_container0}>
              <Image className={styles.fotoMembro0} src={fp} />
            </div>

            <h4 className={styles.nomeMembro0}>Felipe Pedro</h4>

            <hr className={styles.linha0} />

            <div className={styles.info_card0}>
              <div className={styles.texts_container0}>
              <div className={styles.icon_containerweb}>
              <FaGithub size={25} color='#000000'/>
              <FaInstagram size={25} color='#000000'/>
              </div>
                <p className={styles.textMembro0}>  Felipe é um membro com uma personalidade forte e um espírito de
                  liderança marcante, ele se destaca em qualquer desafio que enfrenta.
                  Fazendo dele uma peça chave para o nosso sucesso coletivo.
                </p>
              </div>
            </div>
         </div>


        <div className={styles.card0}>
         <div className={styles.img_container0}>
              <Image className={styles.fotoMembro0} src={fp} />
            </div>

            <h4 className={styles.nomeMembro0}>Matheus Zambon</h4>

            <hr className={styles.linha0} />

            <div className={styles.info_card0}>
              <div className={styles.texts_container0}>
              <div className={styles.icon_containerweb}>
              <FaGithub size={25} color='#000000'/>
              <FaInstagram size={25} color='#000000'/>
              </div>
                <p className={styles.textMembro0}>Matheus Zambon é o membro mais animado e o melhor em trabalho em
                  equipe. Sua energia contagiante e habilidade para colaborar
                  eficazmente com todos tornam ele um elemento essencial para o nosso
                  sucesso coletivo.
                </p>
              </div>
            </div>
        </div>

        <div className={styles.card0}>
         <div className={styles.img_container0}>
              <Image className={styles.fotoMembro0} src={fp} />
            </div>

            <h4 className={styles.nomeMembro0}>João Santos</h4>

            <hr className={styles.linha0} />

            <div className={styles.info_card0}>
              <div className={styles.texts_container0}>
              <div className={styles.icon_containerweb}>
              <FaGithub size={25} color='#000000'/>
              <FaInstagram size={25} color='#000000'/>
              </div>
                <p className={styles.textMembro0}>João é o membro mais criativo e cuida dos Designs e usabilidades do site. Seu perfil criativo agrega muito ao grupo, seja pela organização ou ideiais criativos.
                </p>
              </div>
            </div>
        </div>

        <div className={styles.card0}>
         <div className={styles.img_container0}>
              <Image className={styles.fotoMembro0} src={fp} />
            </div>

            <h4 className={styles.nomeMembro0}>Matheus Gomes</h4>

            <hr className={styles.linha0} />

            <div className={styles.info_card0}>
              <div className={styles.texts_container0}>
              <div className={styles.icon_containerweb}>
              <FaGithub size={25} color='#000000'/>
              <FaInstagram size={25} color='#000000'/>
              </div>
                <p className={styles.textMembro0}> Matheus Gomes é um verdadeiro gênio em programação. Com um talento
                  excepcional para desenvolver soluções, ele combina brilhantismo
                  técnico com uma abordagem colaborativa que enriquece todo o time.
                </p>
              </div>
            </div>
        </div>

        <div className={styles.card0}>
         <div className={styles.img_container0}>
              <Image className={styles.fotoMembro0} src={fp} />
            </div>

            <h4 className={styles.nomeMembro0}>Matheus Carvalho</h4>

            <hr className={styles.linha0} />

            <div className={styles.info_card0}>
              <div className={styles.texts_container0}>
              <div className={styles.icon_containerweb}>
              <FaGithub size={25} color='#000000'/>
              <FaInstagram size={25} color='#000000'/>
              </div>
                <p className={styles.textMembro0}>   Matheus Carvalho é o mestre da lógica na nossa equipe. Com um
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


