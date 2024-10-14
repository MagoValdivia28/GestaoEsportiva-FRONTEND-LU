import styles from './page.module.css';
const PopUpError = ({ error }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup_inner}>
        <h2 className={styles.h2}>{error}</h2>
      </div>
    </div>
  );
};

export default PopUpError;