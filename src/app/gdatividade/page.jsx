import styles from './page.module.css';
import logo from "../../../assets/imagens/logo.png";
import Image from 'next/image';
import VDP from '../components/vdp/vdp';
import Confrontos from '../components/confrontos/confrontos';
import { getAPI } from '@/src/actions/api';

const GdeAtividade = () => {
    return (
        <main className={styles.main_div}>
            <div className={styles.div_img}>
                <Image src={logo} id={styles.logo} width={130} height={130} />
            </div>

            <h2 className={styles.h2Title}>Gerenciamento de atividade</h2>


            <div className={styles.list_container}>
                <VDP />
            </div>

            <div className={styles.container}>
                <h2 className={styles.h2Title}>Confrontos</h2>

                <ul className={styles.confrontos_container}>
                    <Confrontos />
                </ul>


            </div>
        </main>
    );
};

export default GdeAtividade;