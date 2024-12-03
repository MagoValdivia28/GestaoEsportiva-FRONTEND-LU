import styles from './confrontos.module.css';
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { deleteConfronto } from '@/src/actions/api';
import { AuthContext } from '@/src/contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { updateConfronto } from "@/src/actions/api";

const Confrontos = ({ idPartida, data, confrontos }) => {
    const { user, acessToken } = useContext(AuthContext);

    const [selectedWinner, setSelectedWinner] = useState(null);
    const [winTimeName, setWinTimeName] = useState(null);
    const [popUpConfronto, setPopUpConfronto] = useState(false);

    const handleDelete = async () => {
        const response = await deleteConfronto(idPartida, acessToken);
        window.location.reload();
        console.log(response);
    };

    const handleSelectWinner = async () => {
        const data = {
            winner: true,
            tie: false,
            updAtIdUser: user.id
        };
        const response = await updateConfronto(selectedWinner.confrontoid, data, acessToken);
        if (response.status == "sucess") {
            setSelectedWinner(selectedWinner.confrontoid.time);
            console.log(response);
            window.location.reload();
        } else {
            console.log(response);
        }
    };

    const handleDraw = async () => {
    }


    const handleUpdate = async () => {
    };

    const handleWin = (team) => {
        setSelectedWinner(team);
        setWinTimeName(team.time.nome);
        console.log(selectedWinner);

    };


    const handlepopUpConfronto = (confrontos, idPartida) => {
        setPopUpConfronto(!popUpConfronto);

        console.log(popUpConfronto);
        console.log(confrontos);
        console.log(idPartida);
    };

    return (
        <>
            {
                popUpConfronto && (
                    confrontos.map((confronto, index) => (
                        <div key={index} className={styles.confronto_containerBackground}>
                            <div className={styles.confronto_container}>
                                <div className={styles.sla}>
                                    <button className={styles.exitButton} onClick={() => handlepopUpConfronto()}>X</button>
                                </div>
                                <h2>Editar Confronto</h2>
                                <h2>Vencedor: {winTimeName}</h2>
                                <h3>{data}</h3>
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
                                    <button className={styles.saveButton} onClick={handleSelectWinner}>Salvar</button>
                                    <div className={styles.buttonsContainer}>
                                        <button className={styles.winButton} onClick={() => handleWin(confrontos[0])}>{confrontos[0].time.nome} Venceu</button>
                                        {/* <button className={styles.drawButton} onClick={handleDraw()}>Empate</button> */}
                                        <button className={styles.winButton} onClick={() => handleWin(confrontos[1])}>{confrontos[1].time.nome} Venceu</button>
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
                        <FaRegEdit onClick={() => handlepopUpConfronto(confrontos, idPartida)} className={styles.icon} />
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