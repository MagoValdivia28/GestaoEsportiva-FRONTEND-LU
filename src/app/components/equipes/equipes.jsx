import styles from './equipes.module.css';

const Equipes = ({ nameTeam, members, onApprove, onReject }) => (
    <ul className={styles.listUl}>

        <li className={styles.cards_time}>

            <div className={styles.card_top}>
                {/* <p className={styles.exit_button}>X</p> */}
                <div className={styles.gray_circule}></div>
            </div>

            <div className={styles.info_card}>
                <h3>{nameTeam}</h3>
                <h4>Membros: {members.length}</h4>


            </div>
            {(onApprove || onReject) && (
                <div className={styles.actionButtons}>
                    {onApprove && (
                        <button onClick={onApprove} className={styles.approveButton}>
                            Aprovar
                        </button>
                    )}
                    {onReject && (
                        <button onClick={onReject} className={styles.rejectButton}>
                            Rejeitar
                        </button>
                    )}
                </div>
            )}
        </li>

    </ul>
)

export default Equipes