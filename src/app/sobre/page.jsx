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

export default function Sobre() {
  return (
    <div className={styles.container}>
      <div className={styles.cardPrincipal}>
        <img className={styles.fotoRS} />
        <h1 className={styles.sobreA}>Sobre a</h1>
        <h2 className={styles.novaG}>NovaGenix</h2>
        <h2 className={styles.solut}>Solutions</h2>
      </div>


      <div className={styles.cardEquipe}>
        <hr className={styles.linha} />


        <div className={styles.cardImg}>
          <Image src={equipe} className={styles.fotoEquipe} width={100} height={190} />

        </div>
        <hr className={styles.linha} />



        {/* <Image className={styles.fotoMembro} src={fp} width={80} height={190} /> */}

        <div className={styles.card}>
          <div className={styles.img_container}>
            <Image className={styles.fotoMembro} src={fp} width={80} height={190} />
          </div>

          <div className={styles.info_card}>
            <div className={styles.texts_container}>
              <h4 className={styles.nomeMembro}>Felipe Pedro</h4>
              <p className={styles.membro}>membro</p>
              <p className={styles.textMembro}>
                Felipe é um membro com uma personalidade forte e um espírito de
                liderança marcante, ele se destaca em qualquer desafio que enfrenta.
                Fazendo dele uma peça chave para o nosso sucesso coletivo.
              </p>
            </div>
          </div>

        </div>

        <div className={styles.backImg}>
          <Image className={styles.fotoMembro} src={night} width={80} height={190} />
        </div>
        <div className={styles.cardDetalhe}>
          <h4 className={styles.nomeMembro}>João Victor</h4>
          <p className={styles.membro}>membro</p>
          <p className={styles.textMembro}>
            João é um dos membros mais criativos e dedicados da nossa equipe.
            Com uma mente inovadora e um comprometimento exemplar, João traz
            ideias frescas e soluções eficazes. Sua dedicação incansável é uma
            inspiração para todos nós.
          </p>
        </div>


        <div className={styles.backImg}>
          <Image className={styles.fotoMembro} src={fervas} width={80} height={190} />
        </div>
        <div className={styles.cardDetalhe}>
          <h4 className={styles.nomeMembro}>Matheus Carvalho</h4>
          <p className={styles.membro}>membro</p>
          <p className={styles.textMembro}>
            Matheus Carvalho é o mestre da lógica na nossa equipe. Com um
            conhecimento profundo em diversas tecnologias, ele é a referência na
            resolução de problemas complexos. Sua expertise técnica é
            indispensável para o nosso sucesso.
          </p>
        </div>


        <div className={styles.backImg}>
          <Image className={styles.fotoMembro} src={pravel} width={80} height={190} />
        </div>
        <div className={styles.cardDetalhe}>
          <h4 className={styles.nomeMembro}>Matheus Gomes</h4>
          <p className={styles.membro}>membro</p>
          <p className={styles.textMembro}>
            Matheus Gomes é um verdadeiro gênio em programação. Com um talento
            excepcional para desenvolver soluções, ele combina brilhantismo
            técnico com uma abordagem colaborativa que enriquece todo o time.
          </p>
        </div>


        <div className={styles.backImg}>
          <Image className={styles.fotoMembro} src={zambon} width={80} height={200} />
        </div>
        <div className={styles.cardDetalheZ}>
          <h4 className={styles.nomeMembro}>Matheus Zambon</h4>
          <p className={styles.membro}>membro</p>
          <p className={styles.textMembro}>
            Matheus Zambon é o membro mais animado e o melhor em trabalho em
            equipe. Sua energia contagiante e habilidade para colaborar
            eficazmente com todos tornam ele um elemento essencial para o nosso
            sucesso coletivo.
          </p>
        </div>
      </div>
    </div>
  );
}
