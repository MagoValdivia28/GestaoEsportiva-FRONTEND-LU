import styles from './page.module.css';
// import logo from "../assets/imagens/logo.png";
import Image from 'next/image';
import List_times from '../components/list_times/list_times';

const GdeAtividade = () => {
    return (
        <main>
            <div className={styles.div_img}>
                <Image src={logo} id={styles.logo} width={130} height={130} />
            </div>
        </main>
    )
};