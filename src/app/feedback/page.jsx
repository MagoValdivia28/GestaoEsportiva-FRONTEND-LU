"use client";

import styles from './page.module.css';
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbCoins } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GiTennisCourt } from "react-icons/gi";
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/header/header';
import { getAPI } from '@/src/actions/api';

const FeedBack = () => {
    const [feedbacks, setFeedbacks] = useState('');

    // const sendFeedBack = () => {
    //     if (!feedBack) {
    //         alert('O campo de feedback não pode estar vazio');
    //         return;
    //     }
    //     emailjs.send('service_1q7z5qf', 'template_1q7z5qf', { message: feedBack }, 'user_1q7z5qf');
    // };

    useEffect(() => {
        const getAllFeedBacks = async () => {
          const feedbackAPI = await getAPI('feedback');
          setFeedbacks(feedbackAPI.feedback);
            console.log("esses são os feedbacks", feedbackAPI.feedbacks);
            
        };
        getAllFeedBacks();
      }, []);
      

    return (
        <main className={styles.mainContainer}>
            <Header />
            <section className={styles.aboutSection}>
                <div className={styles.aboutText}>
                    <h1 className={styles.title}>
                        <span className={styles.titleRed}>gerenciamento</span>
                        <span className={styles.titleBlack}>dos FeedBacks</span>
                    </h1>
                    <p>pagina destinada ao gerenciamento de feedbacks e opinioes dos clientes, com o objetivo de melhorar a qualidade dos nossos serviços e produtos.
                    </p>
                </div>
                <div className={styles.aboutImage}></div>
            </section>

            <section className={styles.valuesSection}>
                <div className={styles.valueCard}>
                    <IoInformationCircleOutline className={styles.icon} />
                    <p>Valores essenciais e o que nos motiva no dia a dia.</p>
                </div>
                <div className={styles.valueCard}>
                    <TbCoins className={styles.icon} />
                    <p>Compromisso com a excelência e desenvolvimento sustentável.</p>
                </div>
                <div className={styles.valueCard}>
                    <CgProfile className={styles.icon} />
                    <p>Respeito, transparência e trabalho em equipe.</p>
                </div>
            </section>

        
        </main>
    );
};

export default FeedBack;

