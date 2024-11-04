// CadastroPopup.js
"use client";
import React, { useState } from 'react';
import './page.module.css';
import styles from './page.module.css';
import { FaX } from "react-icons/fa6";

const CadastroPopup = ({ isOpen, onClose }) => {
    // Estado para armazenar os valores dos campos do formulário
    const [formData, setFormData] = useState({
        nome: '',
        participante1: '',
        participante2: '',
        participante3: '',
        participante4: '',
        participante5: '',
        participante6: '',
        participante7: '',
        participante8: '',
        participante9: '',
        participante10: '',
        modalidade: '',
        imagem: null
    });

    // Função para lidar com mudanças nos campos de entrada
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value // Para upload de imagem, usamos 'files'
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', formData);
        onClose(); // Fecha o pop-up após o envio do formulário
    };

    // Retorna o pop-up se 'isOpen' for true
    if (!isOpen) return null;

    return (
        <div className={styles.popupoverlay}>
            <div className={styles.popupcontent}>
            <button type="button" onClick={onClose} className={styles.X}>
                        <FaX />
                    </button>
                <h2>Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                    <div className={styles.labelpart}>
                        <div className={styles.participantes_container}>
                            <label>Participante 1:</label>
                            <input
                                type="text"
                                name="participantes"
                                value={formData.participante1}
                                onChange={handleChange}
                                className={styles.participantes}
                                required
                            />
                            <label>Participante 2:</label>
                            <input
                                type="text"
                                name="participantes"
                                value={formData.participante2}
                                onChange={handleChange}
                                className={styles.participantes}
                                required
                            />
                            <label>Participante 3:</label>
                            <input
                                type="text"
                                name="participantes"
                                value={formData.participante3}
                                onChange={handleChange}
                                className={styles.participantes}
                                required
                            />
                            <label>Participante 4:</label>
                            <input
                                type="text"
                                name="participantes"
                                value={formData.participante4}
                                onChange={handleChange}
                                className={styles.participantes}
                                required
                            />
                            <label>Participante 5:</label>
                            <input
                                type="text"
                                name="participantes"
                                value={formData.participante5}
                                onChange={handleChange}
                                className={styles.participantes}
                                required
                            />
                        </div>
                        <div className={styles.participantes_container}>
                            <label>Participante 6:</label>
                            <input
                                type="text"
                                name="participantes"
                                value={formData.participante6}
                                onChange={handleChange}
                                className={styles.participantes}
                                required
                            />
                            <label>Participante 7:</label>
                            <input
                                type="text"
                                name="participantes"
                                value={formData.participante7}
                                onChange={handleChange}
                                className={styles.participantes}
                                required
                            />
                            <label>Participante 8:</label>
                            <input
                                type="text"
                                name="participantes"
                                value={formData.participante8}
                                onChange={handleChange}
                                className={styles.participantes}
                                required
                            />
                            <label>Participante 9:</label>
                            <input
                                type="text"
                                name="participantes"
                                value={formData.participante9}
                                onChange={handleChange}
                                className={styles.participantes}
                                required
                            />
                            <label>Participante 10:</label>
                            <input
                                type="text"
                                name="participantes"
                                value={formData.participante10}
                                className={styles.participantes}
                                onChange={handleChange}
                                required
                            />

                        </div>
                    </div>





                    <label>Modalidade:</label>
                    <select
                        name="modalidade"
                        value={formData.modalidade}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="Futebol">Futebol</option>
                        <option value="Basquete">Basquete</option>
                        <option value="Vôlei">Vôlei</option>
                    </select>

                    <label>Imagem:</label>
                    <input
                        type="file"
                        name="imagem"
                        onChange={handleChange}
                    />

                    <button type="submit" className={styles.cadastro}>Cadastrar</button>
                   
                </form>
            </div>
        </div>
    );
};

export default CadastroPopup;
