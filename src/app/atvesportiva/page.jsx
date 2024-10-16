"use client"
import styles from './page.module.css';
import logo from "../../../assets/imagens/logo.png";
import Image from 'next/image';

const Gestaoesportes = () => {

  return (
    <div className={styles.main_div}>
      <div className={styles.div_img}>
        <Image src={logo} id={styles.logo} width={130} height={130} />
      </div>

      <div className={styles.container}>
        <h2> Placar do evento atual</h2>
        <ul className={styles.placar}>
          <div className={styles.redline}></div>
          <div className={styles.equipesXPontos}>
            <h3 className={styles.infoPlacar}>Equipes</h3>
            <h3 className={styles.infoPlacar}>Pontos</h3>
          </div>
          <li className={styles.equipes}>
            <div className={styles.info_container}>
              <h3 className={styles.info}>Equipe 01</h3>
              <h3 className={styles.info}>000</h3>
            </div>
            <div className={styles.grayline}></div>
          </li>
        </ul>
      </div>

    </div>

  );
};

export default Gestaoesportes;                                                                  