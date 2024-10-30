import styles from './confrontos.module.css';
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";


const Confrontos = () => (
    <li className={styles.confronto}>
        <div className={styles.date_container}>
            <h3 className={styles.date}>12/10/2021</h3>
            <div className={styles.icons_container}>
                <FaRegEdit className={styles.icon} />
                <HiOutlineTrash className={styles.icon} />
            </div>
        </div>
        <div className={styles.time_container}>
            <div className={styles.group_container}>
                <FaUserGroup className={styles.group} />
                <h5>Fortaleza</h5>
            </div>

            <h1>00</h1>
            <h1 className={styles.versus}>X</h1>
            <h1>00</h1>
            <div className={styles.group_container}>
                <FaUserGroup className={styles.group} />
                <h5>Palmeiras</h5>
            </div>
        </div>
    </li>

)

export default Confrontos