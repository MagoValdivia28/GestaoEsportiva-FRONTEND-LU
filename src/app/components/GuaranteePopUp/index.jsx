"use client";

import styles from './page.module.css';

const Guarantee = ({ title, message, close, advance, txtAdvance }) => {
  return (
    <div className={styles.guarantee}>
      <div className={styles.guarantee__content}>
        <h2 className={styles.guarantee__title}>{title}</h2>
        <p className={styles.guarantee__message}>{message}</p>
        <div className={styles.guarantee__buttons}>
          <button className={styles.guarantee__button} onClick={close}>
            Fechar
          </button>
          <button className={styles.guarantee__button1} onClick={advance}>
            {txtAdvance}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
