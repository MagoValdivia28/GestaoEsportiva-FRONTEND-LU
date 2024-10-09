import styles from './page.module.css';
import Image from 'next/image';
import logo from "../assets/imagens/logo.jpg";
// import { AntDesign } from '@expo/vector-icons';

const CadastroEsportes = () => {
  return (
    <div className={styles.divpai}>
      <Image src={logo} id={styles.logo} width={100} height={100} />
      <form className={styles.form}>
        <h1 id={styles.h1}>Gerenciamento de atividades desportivas</h1>
        <div className={styles.formdiv1}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div className={styles.formdiv2}>
          <label htmlFor="descricao">Descrição</label>
          <input type="text" id="descricao" name="descricao" required />
        </div>
        {/* <div className={styles.icon}>
          <AntDesign name="upload" size={24} color="black" />
        </div> */}
        <button type="submit" className={styles.submitButton}>Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroEsportes;