"use client";
import React, { useState } from 'react';
import Styles from './page.module.css';
import { FaX } from "react-icons/fa6";


const FormularioModalidade = ({ isOpen, onClose }) => {
  // Estado para armazenar os valores dos campos do formulário
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
  });

  // Função para lidar com mudanças nos campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    onClose(); // Fecha o pop-up após o envio do formulário
  };

  // Retorna o pop-up se 'isOpen' for true
  if (!isOpen) return null;

  return (
    <div className={Styles.PopupOverlay}>
      <div className={Styles.PopupContent}>
        <button type="button" onClick={onClose} className={Styles.CloseButton}>
        <FaX />
        </button>
        <h2 className={Styles.h2}>Cadastro</h2>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className={Styles.input}
            placeholder="Nome"          />


          <select
            name="tipo"
            value={formData.modalidade}
            onChange={handleChange}
            required
            className={Styles.input}
            placeholder="Tipo" 
          >
            <option value="">Tipo</option>
            <option value="1X1">1 versus 1</option>
            <option value="AllXAll">1 contra todos</option>
          </select>

          <button type="submit"  className={Styles.btn}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioModalidade;