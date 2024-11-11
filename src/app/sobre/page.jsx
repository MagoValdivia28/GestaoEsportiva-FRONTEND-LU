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


          <div className={styles.card}>
            <div className={styles.img_container}>
              <Image className={styles.fotoMembro} src={night} />
            </div>

            <div className={styles.info_card}>
              <div className={styles.texts_container}>
                <h4 className={styles.nomeMembro}>João Victor</h4>
                <p className={styles.textMembro}>
                  João é um dos membros mais criativos e dedicados da nossa equipe.
                  Com uma mente inovadora e um comprometimento exemplar, João traz
                  ideias frescas e soluções eficazes. Sua dedicação incansável é uma
                  inspiração para todos nós.
                </p>
              </div>
            </div>

          </div>

          <div className={styles.card}>
            <div className={styles.img_container}>
              <Image className={styles.fotoMembro} src={fp} />
            </div>

            <div className={styles.info_card}>
              <div className={styles.texts_container}>
                <h4 className={styles.nomeMembro}>Felipe Pedro</h4>
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

            <div className={styles.info_card}>
              <div className={styles.texts_container}>
                <h4 className={styles.nomeMembro}>Matheus Zambon</h4>
                <p className={styles.textMembro}>
                  Matheus Zambon é o membro mais animado e o melhor em trabalho em
                  equipe. Sua energia contagiante e habilidade para colaborar
                  eficazmente com todos tornam ele um elemento essencial para o nosso
                  sucesso coletivo.
                </p>
              </div>
            </div>

          </div>

          <div className={styles.card}>
            <div className={styles.img_container}>
              <Image className={styles.fotoMembro} src={pravel} />
            </div>

            <div className={styles.info_card}>
              <div className={styles.texts_container}>
                <h4 className={styles.nomeMembro}>Matheus Gomes</h4>
                <p className={styles.textMembro}>
                  Matheus Gomes é um verdadeiro gênio em programação. Com um talento
                  excepcional para desenvolver soluções, ele combina brilhantismo
                  técnico com uma abordagem colaborativa que enriquece todo o time.
                </p>
              </div>
            </div>

          </div>

          <div className={styles.card}>
            <div className={styles.img_container}>
              <Image className={styles.fotoMembro} src={fervas} />
            </div>

            <div className={styles.info_card}>
              <div className={styles.texts_container}>
                <h4 className={styles.nomeMembro}>Matheus Carvalho</h4>
                <p className={styles.textMembro}>
                  Matheus Carvalho é o mestre da lógica na nossa equipe. Com um
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


