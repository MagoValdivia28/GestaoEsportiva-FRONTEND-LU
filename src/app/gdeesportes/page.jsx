import styles from './page.module.css';
import logo from "../../../assets/imagens/logo.png";
import Image from 'next/image';
import { Gerenciamento } from '@/src/app/components/Gerenciamentoesportes';

const Gestaoesportes = () => {

  return (
    <div className={styles.main_div}>
      <Image src={logo} id={styles.logo} width={130} height={130} />
  
    </div>

  );
};

export default Gestaoesportes;                                                                  