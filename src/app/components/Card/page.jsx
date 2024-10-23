import styles from "./page.module.css";
import Image from "next/image";

const Card = ({ title, imageUrl }) => {
    return (
        <div className={styles.container}>
        <div className={styles.card}>
            <Image src={imageUrl} alt={title} className={styles.cardImage} />
            <div className={styles.cardOverlay}>
                <span className={styles.cardTitle}>{title}</span>
            </div>
        </div>
        </div>
    );
};

export default Card;
