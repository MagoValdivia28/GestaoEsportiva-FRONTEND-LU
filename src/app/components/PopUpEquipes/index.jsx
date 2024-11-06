// CadastroPopup.js
"use client";
import React, { useState } from 'react';
import './page.module.css';
import styles from './page.module.css';
import { getAPI } from '@/src/actions/api';
import { FaX } from "react-icons/fa6";

const CadastroPopup = ({ isOpen, onClose, modalities }) => {
    console.log(modalities);

    const [formData, setFormData] = useState({
        nome: '',
        sala: '',
        participante1: '',
        participantesala1: '',
        participante2: '',
        participantesala2: '',
        participante3: '',
        participantesala3: '',
        participante4: '',
        participantesala4: '',
        participante5: '',
        participantesala5: '',
        participante6: '',
        participantesala6: '',
        participante7: '',
        participantesala7: '',
        participante8: '',
        participantesala8: '',
        participante9: '',
        participantesala9: '',
        participante10: '',
        participantesala10: '',
        modalidade: '',
        imagem: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        // await getAPI('times/', undefined, formData);
        onClose();
    };

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
                    <label>Sala:</label>
                    <input
                        type="text"
                        name="sala"
                        value={formData.sala}
                        onChange={handleChange}
                    />
                    <div className={styles.labelpart}>
                        <div className={styles.participantes_container}>
                            <label>Participante 1:</label>
                            <input
                                type="text"
                                name="participante1"
                                value={formData.participante1}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante sala 1:</label>
                            <input
                                type="text"
                                name="participantesala1"
                                value={formData.participantesala1}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante 2:</label>
                            <input
                                type="text"
                                name="participante2"
                                value={formData.participante2}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante sala 2:</label>
                            <input
                                type="text"
                                name="participantesala2"
                                value={formData.participantesala2}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante 3:</label>
                            <input
                                type="text"
                                name="participante3"
                                value={formData.participante3}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante sala 3:</label>
                            <input
                                type="text"
                                name="participantesala3"
                                value={formData.participantesala3}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante 4:</label>
                            <input
                                type="text"
                                name="participante4"
                                value={formData.participante4}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante sala 4:</label>
                            <input
                                type="text"
                                name="participantesala4"
                                value={formData.participantesala4}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante 5:</label>
                            <input
                                type="text"
                                name="participante5"
                                value={formData.participante5}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante sala 5:</label>
                            <input
                                type="text"
                                name="participantesala5"
                                value={formData.participantesala5}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                        </div>
                        <div className={styles.participantes_container}>
                            <label>Participante 6:</label>
                            <input
                                type="text"
                                name="participante6"
                                value={formData.participante6}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante sala 6:</label>
                            <input
                                type="text"
                                name="participantesala6"
                                value={formData.participantesala6}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante 7:</label>
                            <input
                                type="text"
                                name="participante7"
                                value={formData.participante7}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante sala 7:</label>
                            <input
                                type="text"
                                name="participantesala7"
                                value={formData.participantesala7}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante 8:</label>
                            <input
                                type="text"
                                name="participante8"
                                value={formData.participante8}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante sala 8:</label>
                            <input
                                type="text"
                                name="participantesala8"
                                value={formData.participantesala8}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante 9:</label>
                            <input
                                type="text"
                                name="participante9"
                                value={formData.participante9}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante sala 9:</label>
                            <input
                                type="text"
                                name="participantesala9"
                                value={formData.participantesala9}
                                onChange={handleChange}
                                className={styles.participantes}
                            />
                            <label>Participante 10:</label>
                            <input
                                type="text"
                                name="participante10"
                                value={formData.participante10}
                                className={styles.participantes}
                                onChange={handleChange}
                            />
                            <label>Participante sala 10:</label>
                            <input
                                type="text"
                                name="participantesala10"
                                value={formData.participantesala10}
                                onChange={handleChange}
                                className={styles.participantes}
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
                        {
                            modalities.length > 0 && modalities.map(modality => (
                                <option key={modality.modalidade_id} value={modality.modalidade_id}>
                                    {modality.modalidade_nome}
                                </option>
                            ))
                        }
                    </select>
                    <label>Imagem:</label>
                    <input
                        type="file"
                        name="imagem"
                        onChange={handleChange}
                        required
                    />
                    <button className={styles.cadastro}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default CadastroPopup;