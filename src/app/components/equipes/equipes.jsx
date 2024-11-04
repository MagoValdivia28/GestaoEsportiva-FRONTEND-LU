import styles from './equipes.module.css';

const Equipes = ({nameTeam, members}) => (
        <ul className={styles.listUl}>

            <li className={styles.cards_time}>

                <div className={styles.card_top}>
                    {/* <p className={styles.exit_button}>X</p> */}
                    <div className={styles.gray_circule}></div>
                </div>

                <div className={styles.info_card}>
                    <h3>{nameTeam}</h3>
                    <h4>Membros:</h4>
                    {
                        members.map(member => (
                            <p key={member.id}>{member.nome}</p>
                        ))
                    }
                </div>
            </li>

        </ul>
)

export default Equipes