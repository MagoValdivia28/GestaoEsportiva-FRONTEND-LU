import styles from "./page.module.css";
import Image from "next/image";

const Card = ({ title, imageUrl, onClick }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card} onClick={onClick}>
                <Image src={imageUrl} className={styles.cardImage} />
                <div className={styles.cardOverlay}>
                    <span className={styles.cardTitle}>{title}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
