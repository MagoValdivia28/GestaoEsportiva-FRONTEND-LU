'use client'
import React from 'react';
import styles from './page.module.css';  // Importando os estilos CSS
import Image from 'next/image';
import equipe from '../../../assets/imagens/imgEquipe.jpg';
import zambon from '../../../assets/imagens/Zambon.jpg';
import fervas from '../../../assets/imagens/fervas.jpeg';
import night from '../../../assets/imagens/Night.jpeg';
import fp from '../../../assets/imagens/fp.jpeg';
import pravel from '../../../assets/imagens/pravel.jpeg';
import Header from '../components/header/header';

// Importando o Swiper e SwiperSlide
import { Swiper, SwiperSlide } from 'swiper/react';

// Importando os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
          {/* Integrando o Swiper para o carrossel */}
          <Swiper
            spaceBetween={20}  // Espaçamento entre os cards
            slidesPerView={1}  // Exibir 1 card por vez
            navigation={true}  // Ativar a navegação (setas)
            pagination={{ clickable: true }}  // Ativar os pontos de navegação
            loop={true}  // Ativar o loop (voltar ao primeiro quando chegar ao último)
            autoplay={{ delay: 2500 }}  // Autoplay com 2,5 segundos de delay
            breakpoints={{
              640: {
                slidesPerView: 2,  // Exibir 2 cards por vez em telas pequenas
              },
              768: {
                slidesPerView: 3,  // Exibir 3 cards por vez em telas médias
              },
            }}
          >
            {/* Card 1 */}
            <SwiperSlide>
              <div className={styles.Card}>
                <div className={styles.CardHeader}>
                  <div className={styles.img_container}>
                    <Image className={styles.fotoMembro} src={fp} alt="Felipe Pedro" />
                  </div>
                </div>
                <div className={styles.CardBody}>
                  <h3>Felipe Pedro</h3>
                  <p className={styles.Description}>
                    Felipe é um membro com uma personalidade forte e um espírito de
                    liderança marcante, ele se destaca em qualquer desafio que enfrenta.
                    Fazendo dele uma peça chave para o nosso sucesso coletivo.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Card 2 */}
            <SwiperSlide>
              <div className={styles.Card}>
                <div className={styles.CardHeader}>
                  <div className={styles.img_container}>
                    <Image className={styles.fotoMembro} src={night} alt="João Santos" />
                  </div>
                </div>
                <div className={styles.CardBody}>
                  <h3>João Santos</h3>
                  <p className={styles.Description}>
                    João é um dos membros mais criativos e dedicados da nossa equipe.
                    Com uma mente inovadora e um comprometimento exemplar, João traz
                    ideias frescas e soluções eficazes. Sua dedicação incansável é uma
                    inspiração para todos nós.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Card 3 */}
            <SwiperSlide>
              <div className={styles.Card}>
                <div className={styles.CardHeader}>
                  <div className={styles.img_container}>
                    <Image className={styles.fotoMembro} src={zambon} alt="Matheus Zambon" />
                  </div>
                </div>
                <div className={styles.CardBody}>
                  <h3>Matheus Zambon</h3>
                  <p className={styles.Description}>
                    Matheus Zambon é o membro mais animado e o melhor em trabalho em
                    equipe. Sua energia contagiante e habilidade para colaborar
                    eficazmente com todos tornam ele um elemento essencial para o nosso
                    sucesso coletivo.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Card 4 */}
            <SwiperSlide>
              <div className={styles.Card}>
                <div className={styles.CardHeader}>
                  <div className={styles.img_container}>
                    <Image className={styles.fotoMembro} src={fervas} alt="Maatheus Côcco" />
                  </div>
                </div>
                <div className={styles.CardBody}>
                  <h3>Maatheus Côcco</h3>
                  <p className={styles.Description}>
                    Matheus Carvalho é o mestre da lógica na nossa equipe. Com um
                    conhecimento profundo em diversas tecnologias, ele é a referência na
                    resolução de problemas complexos. Sua expertise técnica é
                    indispensável para o nosso sucesso.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Card 5 */}
            <SwiperSlide>
              <div className={styles.Card}>
                <div className={styles.CardHeader}>
                  <div className={styles.img_container}>
                    <Image className={styles.fotoMembro} src={pravel} alt="Maatheus Gomes" />
                  </div>
                </div>
                <div className={styles.CardBody}>
                  <h3>Maatheus Gomes</h3>
                  <p className={styles.Description}>
                    Matheus Gomes é um verdadeiro gênio em programação. Com um talento
                    excepcional para desenvolver soluções, ele combina brilhantismo
                    técnico com uma abordagem colaborativa que enriquece todo o time.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}




// 'use client'
// import React, { useState } from 'react';
// import styles from './page.module.css';
// import Image from 'next/image';
// import equipe from '../../../assets/imagens/imgEquipe.jpg';
// import zambon from '../../../assets/imagens/Zambon.jpg';
// import fervas from '../../../assets/imagens/fervas.jpeg';
// import night from '../../../assets/imagens/Night.jpeg';
// import fp from '../../../assets/imagens/fp.jpeg';
// import pravel from '../../../assets/imagens/pravel.jpeg';
// import Header from '../components/header/header';

// export default function Sobre() {
//   return (
//     <div className={styles.container}>
//       <Header />
//       <div className={styles.cardEquipe}>
//         <hr className={styles.linha} />


//         <div className={styles.cardImg}>
//           <Image src={equipe} className={styles.fotoEquipe} />

//         </div>
//         <hr className={styles.linha} />

//   <div className={styles.div_cards}>


//     <div className={styles.Card}>
//       <div className={styles.CardHeader}>
//       <div className={styles.img_container}>
//               <Image className={styles.fotoMembro} src={fp} />
//             </div>
//       </div>
//       <div className={styles.CardBody}>
//         <h3>Felipe Pedro</h3>
//         <p className={styles.Description}>
//         Felipe é um membro com uma personalidade forte e um espírito de
//                   liderança marcante, ele se destaca em qualquer desafio que enfrenta.
//                   Fazendo dele uma peça chave para o nosso sucesso coletivo.
//         </p>
//       </div>
//     </div>

//     <div className={styles.Card}>
//       <div className={styles.CardHeader}>
//       <div className={styles.img_container}>
//               <Image className={styles.fotoMembro} src={night} />
//             </div>
//       </div>
//       <div className={styles.CardBody}>
//         <h3>João Santos</h3>
//         <p className={styles.Description}>
//         João é um dos membros mais criativos e dedicados da nossa equipe.
//                   Com uma mente inovadora e um comprometimento exemplar, João traz
//                   ideias frescas e soluções eficazes. Sua dedicação incansável é uma
//                   inspiração para todos nós.
//         </p>
//       </div>
//     </div>

//     <div className={styles.Card}>
//       <div className={styles.CardHeader}>
//       <div className={styles.img_container}>
//               <Image className={styles.fotoMembro} src={zambon} />
//             </div>
//       </div>
//       <div className={styles.CardBody}>
//         <h3>Matheus Zambon</h3>
//         <p className={styles.Description}>
//         Matheus Zambon é o membro mais animado e o melhor em trabalho em
//                   equipe. Sua energia contagiante e habilidade para colaborar
//                   eficazmente com todos tornam ele um elemento essencial para o nosso
//                   sucesso coletivo.
//         </p>
//       </div>
//     </div>

    
//     <div className={styles.Card}>
//       <div className={styles.CardHeader}>
//       <div className={styles.img_container}>
//               <Image className={styles.fotoMembro} src={fervas} />
//             </div>
//       </div>
//       <div className={styles.CardBody}>
//         <h3>Maatheus Côcco</h3>
//         <p className={styles.Description}>
//         Matheus Carvalho é o mestre da lógica na nossa equipe. Com um
//                   conhecimento profundo em diversas tecnologias, ele é a referência na
//                   resolução de problemas complexos. Sua expertise técnica é
//                   indispensável para o nosso sucesso.
//         </p>
//       </div>
//     </div>

//     <div className={styles.Card}>
//       <div className={styles.CardHeader}>
//       <div className={styles.img_container}>
//               <Image className={styles.fotoMembro} src={pravel} />
//             </div>
//       </div>
//       <div className={styles.CardBody}>
//         <h3>Maatheus Gomes</h3>
//         <p className={styles.Description}>
//         Matheus Gomes é um verdadeiro gênio em programação. Com um talento
//                   excepcional para desenvolver soluções, ele combina brilhantismo
//                   técnico com uma abordagem colaborativa que enriquece todo o time.
//         </p>
//       </div>
//     </div>

//           {/* <div className={styles.card}>
//             <div className={styles.img_container}>
//               <Image className={styles.fotoMembro} src={fervas} />
//             </div>

//             <div className={styles.info_card}>
//               <div className={styles.texts_container}>
//                 <h4 className={styles.nomeMembro}>Matheus Carvalho</h4>
//                 <p className={styles.textMembro}>
//                   Matheus Carvalho é o mestre da lógica na nossa equipe. Com um
//                   conhecimento profundo em diversas tecnologias, ele é a referência na
//                   resolução de problemas complexos. Sua expertise técnica é
//                   indispensável para o nosso sucesso.
//                 </p>
//               </div>
//             </div>
//           </div> */}
//         </div>


//       </div>
//     </div>
//   );
// }