import styles from './confrontos.module.css';
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { deleteConfronto } from '@/src/actions/api';
import { AuthContext } from '@/src/contexts/AuthContext';
import { useContext } from 'react';

const Confrontos = ({ idPartida, data, confrontos }) => {
    const { acessToken } = useContext(AuthContext);

    const handleDelete = async () => {
        const response = await deleteConfronto(idPartida, acessToken);
        window.location.reload();
        console.log(response);
    };

    const handleUpdate = async () => {

    };

    return (
        <li className={styles.confronto}>
            <div className={styles.date_container}>
                <h3 className={styles.date}>{data}</h3>
                <div className={styles.icons_container}>
                    <FaRegEdit className={styles.icon} />
                    <HiOutlineTrash onClick={() => handleDelete()} className={styles.icon} />
                </div>
            </div>
            <div className={styles.time_container}>
                <div className={styles.group_container}>
                    <FaUserGroup className={styles.group} />
                    <h5>{confrontos[0].time.nome}</h5>
                </div>
                <h1>00</h1>
                <h1 className={styles.versus}>X</h1>
                <h1>00</h1>
                <div className={styles.group_container}>
                    <FaUserGroup className={styles.group} />
                    <h5>{confrontos[1].time.nome}</h5>
                </div>
            </div>
        </li>
    );
}

export default Confrontos