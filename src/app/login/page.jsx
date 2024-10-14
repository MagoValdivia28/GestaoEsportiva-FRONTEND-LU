import styles from './page.module.css';
import logo from "../../../assets/imagens/logo.png";
import Image from 'next/image';
import FormAuth from '@/src/app/components/FormAuth';
import { Gerenciamento } from '@/src/app/components/Gerenciamentoesportes';

const Login = () => {

  return (
    <div className={styles.divpai}>
      <Image src={logo} id={styles.logo} width={130} height={130} />
      <FormAuth />
    </div>

  );
};

export default Login;                                                                  