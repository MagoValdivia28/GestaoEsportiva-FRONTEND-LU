import styles from './list_times.module.css';

const List_times = () => (
        <ul className={styles.listUl}>

            <li className={styles.cards_time}>

                <div className={styles.card_top}>
                    {/* <p className={styles.exit_button}>X</p> */}
                    <div className={styles.gray_circule}></div>
                </div>

                <div className={styles.info_card}>
                    <h3>Equipe 03</h3>
                    <h4>Membros:</h4>
                    <p>Sla</p>
                </div>
            </li>

        </ul>
)

export default List_times