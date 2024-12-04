import styles from './confrontos.module.css'; 
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { deleteConfronto } from '@/src/actions/api';
import { AuthContext } from '@/src/contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { updateConfronto } from "@/src/actions/api";
import { FaCrown } from "react-icons/fa";

const Confrontos = ({ idPartida, data, confrontos }) => {
    const { user, acessToken } = useContext(AuthContext);
    const [selectedWinner, setSelectedWinner] = useState(null);
    const [selectedDefeat, setSelectedDefeat] = useState(null);
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
        const data2 = {
            winner: false,
            tie: false,
            updAtIdUser: user.id
        };
        const response2 = await updateConfronto(selectedDefeat.confrontoid, data2, acessToken);

        if (response.status == "sucess" && response2.status == "sucess") {
            setSelectedWinner(selectedWinner.confrontoid.time);
            window.location.reload();
        }
    };

    const handleDraw = async (team1, team2) => {
        const data = {
            winner: false,
            tie: true,
            updAtIdUser: user.id
        };
        const response = await updateConfronto(team1.confrontoid, data, acessToken);
        const data2 = {
            winner: false,
            tie: true,
            updAtIdUser: user.id
        };
        const response2 = await updateConfronto(team2.confrontoid, data2, acessToken);

        if (response.status == "sucess" && response2.status == "sucess") {
            window.location.reload();
        }
    }

    const handleUpdate = async () => {
    };

    const handleWin = (team1, team2) => {
        setSelectedWinner(team1);
        setSelectedDefeat(team2);
        setWinTimeName(team1.time.nome);
    };

    const handlepopUpConfronto = (confrontos, idPartida) => {
        setPopUpConfronto(!popUpConfronto);
    };

    return (
        <>
            {popUpConfronto && (
                confrontos.map((confronto, index) => (
                    <div key={index} className={styles.confronto_containerBackground}>
                        <div className={styles.confronto_container}>
                            <div className={styles.sla}>
                                <button className={styles.exitButton} onClick={() => handlepopUpConfronto()}>X</button>
                            </div>
                            <h2>Editar Confronto</h2>
                            {confrontos[0].winner ? (
                                <h3>{confrontos[0].time.nome} Venceu</h3>
                            ) : confrontos[1].winner ? (
                                <h3>{confrontos[1].time.nome} Venceu</h3>
                            ) : (
                                <h3>Empate</h3>
                            )}
                            <h3>{data}</h3>
                            <div className={styles.time_container}>
                                <div className={styles.group_container}>
                                    <FaUserGroup className={styles.group} />
                                    <h5>{confrontos[0].time.nome}</h5>
                                    {confrontos[0].winner && <FaCrown className={styles.crown} />}
                                </div>
                                <div className={styles.group_container}>
                                    <FaUserGroup className={styles.group} />
                                    <h5>{confrontos[1].time.nome}</h5>
                                    {confrontos[1].winner && <FaCrown className={styles.crown} />}
                                </div>
                            </div>
                            <div className={styles.btnContainer}>
                                <div className={styles.buttonsContainer}>
                                    <button 
                                        className={`${styles.winButton} ${selectedWinner === confrontos[0] ? styles.selected : ''}`} 
                                        onClick={() => handleWin(confrontos[0], confrontos[1])}
                                    >
                                        {confrontos[0].time.nome} Venceu
                                    </button>
                                    <button 
                                        className={styles.drawButton} 
                                        onClick={() => handleDraw(confrontos[0], confrontos[1])}
                                    >
                                        Empate
                                    </button>
                                    <button 
                                        className={`${styles.winButton} ${selectedWinner === confrontos[1] ? styles.selected : ''}`} 
                                        onClick={() => handleWin(confrontos[1], confrontos[0])}
                                    >
                                        {confrontos[1].time.nome} Venceu
                                    </button>
                                </div>
                                <button className={styles.saveButton} onClick={handleSelectWinner}>Salvar</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
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
                        {confrontos[0].winner && <FaCrown className={styles.crown} />}
                    </div>
                    <div className={styles.containerEmpate}>
                        {confrontos[0].tie === true && confrontos[1].tie === true && (
                            <h1 className={styles.versus}>Empate</h1>
                        )}
                        <h1 className={styles.versus}>X</h1>
                    </div>
                    <div className={styles.group_container}>
                        <FaUserGroup className={styles.group} />
                        <h5>{confrontos[1].time.nome}</h5>
                        {confrontos[1].winner && <FaCrown className={styles.crown} />}
                    </div>
                </div>
            </li>
        </>
    );
}

export default Confrontos;
