import styles from "./page.module.css";

const CardModality = ({ title, onClick }) => {
    return (
        <div className={styles.container}>
        <div className={styles.card} onClick={onClick}>
        <h1 className={styles.titulo}>{title}</h1>
        
        </div>
        </div>
    );
};

export default CardModality;
