import styles from './confrontos.module.css';
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { deleteConfronto } from '@/src/actions/api';
import { AuthContext } from '@/src/contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';

const Confrontos = ({ idPartida, data, confrontos, popUpConfronto, popUp }) => {
    const { acessToken } = useContext(AuthContext);

    const [winner, setWinner] = useState(null);

    const handleDelete = async () => {
        const response = await deleteConfronto(idPartida, acessToken);
        window.location.reload();
        console.log(response);
    };

    const handleUpdate = async () => {

    };

    const handleWin = (team) => {
        console.log(`${team} won`);
        // Add logic to handle win
    };

    const handleDraw = () => {
        console.log('Draw');
        // Add logic to handle draw
    };

    return (
        <>
            {
                popUp && (
                    confrontos.map((confronto, index) => (
                        <div key={index} className={styles.confronto_containerBackground}>
                            <div className={styles.confronto_container}>
                                <div className={styles.sla}>
                                    <h2>Editar Confronto</h2>
                                    <button className={styles.exitButton} onClick={() => popUpConfronto()}>X</button>
                                </div>

                                <div className={styles.time_container}>
                                    <div className={styles.group_container}>
                                        <FaUserGroup className={styles.group} />
                                        <h5>{confrontos[0].time.nome}</h5>
                                    </div>
                                    <div className={styles.group_container}>
                                        <FaUserGroup className={styles.group} />
                                        <h5>{confrontos[1].time.nome}</h5>
                                    </div>
                                </div>
                                <div className={styles.btnContainer}>
                                    <button className={styles.saveButton} onClick={handleUpdate}>Salvar</button>
                                    <div className={styles.buttonsContainer}>
                                        <button className={styles.winButton} onClick={() => handleWin(confrontos[0].time.nome)}>Time 1 Venceu</button>
                                        <button className={styles.drawButton} onClick={handleDraw}>Empate</button>
                                        <button className={styles.winButton} onClick={() => handleWin(confrontos[1].time.nome)}>Time 2 Venceu</button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))
                )
            }
            <li className={styles.confronto}>
                <div className={styles.date_container}>
                    <h3 className={styles.date}>{data}</h3>
                    <div className={styles.icons_container}>
                        <FaRegEdit onClick={() => popUpConfronto(confrontos, idPartida)} className={styles.icon} />
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
        </>
    );
}

export default Confrontos