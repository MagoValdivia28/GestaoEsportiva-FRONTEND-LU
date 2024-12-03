import styles from './equipes.module.css';
import { useState } from 'react';

const Equipes = ({ nameTeam, members, onApprove, onReject, onClick }) => {
    return (
        <ul className={styles.listUl} onClick={onClick}>
            <li className={styles.cards_time}>
                <div className={styles.card_top}>
                    <div className={styles.gray_circule}></div>
                </div>
                <div className={styles.info_card}>
                    <h3>{nameTeam}</h3>
                    <h4>Membros: {members.length}</h4>
                </div>


                {(onApprove || onReject) && (
                    <div className={styles.actionButtons}>
                        {onApprove && (

                            <button onClick={(e) => { e.stopPropagation(); onApprove(); }} className={styles.approveButton}>
                                Aprovar
                            </button>


                        )}
                        {onReject && (
                            <button onClick={(e) => { e.stopPropagation(); onReject(); }} className={styles.rejectButton}>
                                Rejeitar
                            </button>
                        )}
                    </div>
                )}
            </li>
        </ul>
    )
};

export default Equipes;
