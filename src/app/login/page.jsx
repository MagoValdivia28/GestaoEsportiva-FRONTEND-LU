import styles from './page.module.css';
import logo from "../../../assets/imagens/logo.jpg";
import Image from 'next/image';
import Teste from '@/src/components/teste';

const Login = () => {

  return (
    <div className={styles.divpai}>
      <Image src={logo} id={styles.logo} width={130} height={130} />
      <Teste />
    </div>

  );
};

export default Login;                                                                  