import styles from './page.module.css';

const FeedBack = () => {
    return (
        <main className={styles.main_container}>
            <div className={styles.firstIMG_container}>
                <div className={styles.img}></div>
            </div>

            <div className={styles.about_container}>
                <div className={styles.info_about_container}>
                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maiores repellat sunt autem
                        explicabo quod voluptates aliquid ducimus
                        eligendi dolores nam dolore eveniet quaerat, natus fugiat ipsam officia rerum placeat.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maiores repellat sunt autem
                        explicabo quod voluptates aliquid ducimus
                        eligendi dolores nam dolore eveniet quaerat, natus fugiat ipsam officia rerum placeat.
                    </p>
                </div>

                <div className={styles.img_about_container}>

                </div>
            </div>

            <div className={styles.MVV_ontainer}>

            </div>
        </main>
    )
}

export default FeedBack;