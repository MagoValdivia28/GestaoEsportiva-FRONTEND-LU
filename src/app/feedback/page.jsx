"use client";

import styles from './page.module.css';
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbCoins } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/header/header';
import { getAPI } from '@/src/actions/api';

const FeedBack = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedback, setFeedback] = useState('');
    const [response, setResponse] = useState('');
    const [respondingTo, setRespondingTo] = useState(null); // Armazena o índice do feedback sendo respondido

    const sendFeedBack = () => {
        if (!feedback) {
            alert('O campo de feedback não pode estar vazio');
            return;
        }

        emailjs.send('service_1q7z5qf', 'template_1q7z5qf', { message: feedback }, 'user_1q7z5qf')
            .then(response => {
                console.log("Feedback enviado com sucesso!", response.status, response.text);
                setFeedback(''); // Limpa o campo de feedback após o envio
            })
            .catch(error => {
                console.error("Erro ao enviar feedback:", error);
            });
    };

    useEffect(() => {
        const getAllFeedBacks = async () => {
            try {
                const feedbackAPI = await getAPI('feedback');
                setFeedbacks(feedbackAPI.feedbacks || []);
                console.log("Feedbacks recebidos:", feedbackAPI.feedbacks);
            } catch (error) {
                console.error("Erro ao buscar feedbacks:", error);
            }
        };
        getAllFeedBacks();
    }, []);

    const handleRespondClick = (index) => {
        // Define qual feedback está sendo respondido
        setRespondingTo(index);
    };

    const handleSubmitResponse = (feedbackId) => {
        // Aqui você pode simular a resposta enviada, por enquanto não está conectada a um banco de dados
        const updatedFeedbacks = [...feedbacks];
        updatedFeedbacks[feedbackId].resposta = response;  // Adiciona a resposta ao feedback
        setFeedbacks(updatedFeedbacks);  // Atualiza o estado com os feedbacks e respostas
        setResponse(''); // Limpa o campo de resposta após o envio
        setRespondingTo(null); // Fecha o campo de resposta
    };

    return (
        <main className={styles.mainContainer}>
        <Header />
        <section className={styles.aboutSection}>
            <div className={styles.aboutText}>
                <h1 className={styles.title}>
                    <span className={styles.titleRed}>gerenciamento</span>
                    <span className={styles.titleBlack}>dos FeedBacks</span>
                </h1>
                <p>Página destinada ao gerenciamento de feedbacks e opiniões dos clientes, com o objetivo de melhorar a qualidade dos nossos serviços e produtos.</p>
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

            <section className={styles.receivedFeedbacks}>
                <h2>Feedbacks Recebidos</h2>
                <div className={styles.feedbackList}>
                    {feedbacks.length > 0 ? (
                        feedbacks.map((feedback, index) => {
                            // Formata a data para o formato desejado
                            const formattedDate = new Date(feedback.data).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            });

                            return (
                                <div key={index} className={styles.feedbackItem}>
                                    <p>{feedback.nome_usuario}</p>
                                    <p>{feedback.comentario}</p>
                                    <div className={styles.rating}>
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={i < feedback.nota ? styles.starFilled : styles.starEmpty}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <p>data: {formattedDate}</p>

                                    {/* Exibe o botão "Responder" apenas para feedbacks não respondidos */}
                                    {(!feedback.resposta && respondingTo !== index) && (
                                        <button
                                            className={styles.replyButton}
                                            onClick={() => handleRespondClick(index)}
                                        >
                                            Responder
                                        </button>
                                    )}

                                    {/* Exibe o input de resposta e botão de enviar somente para o feedback selecionado */}
                                    {respondingTo === index && (
                                        <div className={styles.replyContainer}>
                                            <textarea
                                                className={styles.replyInput}
                                                value={response}
                                                onChange={(e) => setResponse(e.target.value)}
                                                placeholder="Escreva sua resposta..."
                                            />
                                            <button
                                                className={styles.sendButton}
                                                onClick={() => handleSubmitResponse(index)} // Passando o índice do feedback
                                            >
                                                Enviar Resposta
                                            </button>
                                        </div>
                                    )}

                                    {/* Exibe a resposta já enviada */}
                                    {feedback.resposta && (
                                        <div className={styles.response}>
                                            <strong>Resposta: </strong>
                                            <p>{feedback.resposta}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <p>Nenhum feedback recebido ainda.</p>
                    )}
                </div>
            </section>
        </main>
    );
};

export default FeedBack;
