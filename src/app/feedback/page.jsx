"use client";

import styles from './page.module.css';
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbCoins } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/header/header';
import { getAPI, createFeedback } from '@/src/actions/api';
import { updateFeedback } from '@/src/actions/api';
import feedbackimg from '../../../assets/imagens/feedbackLu.jpg';
import Image from 'next/image';
import Footer from '../components/footer/page';

const FeedBack = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedback, setFeedback] = useState('');
    const [response, setResponse] = useState('');
    const [respondingTo, setRespondingTo] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [comentario, setComentario] = useState('');
    const [nota, setNota] = useState(0);

    const sendFeedBack = async () => {
        if (!nomeUsuario || !comentario || nota === 0) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await createFeedback(nomeUsuario, comentario, nota);
            console.log("Feedback enviado com sucesso:", response);


            if (response.ok) {
                alert('Feedback enviado com sucesso!');
                setNomeUsuario('');
                setComentario('');
                setNota(0);
            }
        } catch (error) {
            console.error('Erro ao enviar feedback:', error);
            alert('Erro ao enviar feedback.');
        }
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

        // Detecta se a tela é mobile
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Verifica a tela no carregamento

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    const handleRespondClick = (index) => {
        setRespondingTo(index);
    };

    const handleSubmitResponse = async (id) => {
        if (!response) {
            alert('O campo de resposta não pode estar vazio');
            return;
        }

        try {
            const responseAPI = await updateFeedback(id, response);
            console.log("Resposta enviada com sucesso:", responseAPI);

            // Atualiza os feedbacks na UI
            setFeedbacks(prevFeedbacks =>
                prevFeedbacks.map(feedback =>
                    feedback.id === id ? { ...feedback, resposta: response } : feedback
                )
            );
            setResponse('');
            setRespondingTo(null);
        } catch (error) {
            console.error("Erro ao enviar resposta:", error);
        }
    };

    return (
        <>
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
                    <div className={styles.aboutImage}>
                    </div>
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
                <div className={styles.sendfeedback}>
                    {isMobile && (
                        <section className={styles.feedbackForm}>
                            <h3>Deixe seu Feedback</h3>

                            {/* Nome do usuário */}
                            <input
                                type="text"
                                className={styles.feedbackInput}
                                onChange={(e) => setNomeUsuario(e.target.value)}
                                placeholder="Digite seu nome"
                            />

                            {/* Comentário */}
                            <textarea
                                className={styles.feedbackInput}
                                onChange={(e) => setComentario(e.target.value)}
                                placeholder="Digite seu feedback aqui..."
                            />

                            {/* Nota */}
                            <select
                                className={styles.feedbackInput}
                                onChange={(e) => setNota(Number(e.target.value))}
                            >
                                <option value={0}>Selecione a nota</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            {/* Botão de envio */}
                            <button className={styles.sendButton} onClick={sendFeedBack}>
                                Enviar Feedback
                            </button>
                        </section>
                    )}
                </div>
                <section className={styles.receivedFeedbacks}>
                    <h2>Feedbacks Recebidos</h2>
                    <div className={styles.feedbackList}>
                        {feedbacks.length > 0 ? (
                            feedbacks.map((feedback, index) => {
                                const formattedDate = new Date(feedback.data).toLocaleDateString('pt-BR', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                });

                                return (
                                    <div key={feedback.id} className={styles.feedbackItem}>
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

                                        {!feedback.resposta && respondingTo !== index && !isMobile && (
                                            <button
                                                className={styles.replyButton}
                                                onClick={() => handleRespondClick(index)}
                                            >
                                                Responder
                                            </button>
                                        )}

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
                                                    onClick={() => handleSubmitResponse(feedback.id)}
                                                >
                                                    Enviar Resposta
                                                </button>
                                            </div>
                                        )}

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
            <Footer />
        </>
    );
};

export default FeedBack;
