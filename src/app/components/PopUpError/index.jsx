import styles from './page.module.css';
import { BiErrorAlt } from "react-icons/bi";
import { PiShieldCheckLight } from "react-icons/pi";

const PopUpError = ({ error }) => {
  return (
    <div className={styles.popup}>
      {
        error.status == "sucess" ? (
          <div className={styles.popup_inner2}>
            <PiShieldCheckLight className={styles.icon} color='#fff' size={30} />
            <h2 className={styles.h2}>Campeonato criado com sucesso!</h2>
          </div>
        ) : (
          <div className={styles.popup_inner}>
            <BiErrorAlt className={styles.icon} color='#fff' size={30} />
            <h2 className={styles.h2}>{error.message}</h2>
          </div>
        )
      }
    </div>
  );
};

export default PopUpError;