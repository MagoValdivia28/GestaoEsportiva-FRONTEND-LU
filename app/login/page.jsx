import styles from './page.module.css';
import logo from "../assets/imagens/logo.jpg";
import Image from 'next/image';

const Login = () => {
  return (
    <div className={styles.divpai}>
      <Image src={logo} id={styles.logo} width={100} height={100} />
      <form className={styles.form}>
        <h1 id={styles.h1}>Login</h1>
        <div className={styles.formdiv1}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formdiv2}>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.submitButton}>Entrar</button>
      </form>
    </div>

  );
};

export default Login;                                                                  