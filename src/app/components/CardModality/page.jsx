import styles from "./page.module.css";

const CardModality = ({ title, subtitle, onClick }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card} onClick={onClick}>
                <h1 className={styles.cardTitle}>{title}</h1>
                {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
                <div className={styles.cardOverlay}></div>
            </div>
        </div>
    );
};

export default CardModality;