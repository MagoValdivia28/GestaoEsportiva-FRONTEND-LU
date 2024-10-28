import styles from './page.module.css';
import logo from "../../../assets/imagens/logo.png";
import Image from 'next/image';
import { List } from '@mui/material';
import List_times from '../components/list_times/list_times';
import VDP from '../components/vdp/vdp';


const GdeAtividade = () => {
    return (
        <main className={styles.main_div}>
            <div className={styles.div_img}>
                <Image src={logo} id={styles.logo} width={130} height={130} />
            </div>

            <div className={styles.title_container}>
                <h2 className={styles.h2Title}>Gerenciamento de atividade</h2>
            </div>


            <div className={styles.list_container}>
                <VDP />
            </div>

            <div className={styles.container}>
                <h2 className={styles.h2Title}>Confrontos</h2>
            </div>
        </main>
    )
};

export default GdeAtividade;