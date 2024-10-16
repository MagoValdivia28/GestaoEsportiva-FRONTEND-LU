import styles from './page.module.css';
import { BiErrorAlt } from "react-icons/bi";

const PopUpError = ({ error }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup_inner}>
        <BiErrorAlt className={styles.icon} color='#fff' size={30} />
        <h2 className={styles.h2}>{error}</h2>
      </div>
    </div>
  );
};

export default PopUpError;