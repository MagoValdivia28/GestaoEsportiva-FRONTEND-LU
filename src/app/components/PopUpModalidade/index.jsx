"use client";
import React, { useState } from 'react';
import Styles from './page.module.css';
import { FaX } from "react-icons/fa6";
import { createModalidade } from '@/src/actions/api';
import PopUpError from '../PopUpError';

const FormularioModalidade = ({ isOpen, onClose, campeonato_id, onModalidadeAdded }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Estado para armazenar os valores dos campos do formulário
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
    desc: '',
    limit: '',
    value: ''
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createModalidade(
      formData.nome,
      formData.desc,
      formData.limit,
      campeonato_id,
      formData.value,
      formData.tipo,
    );
    if (response.status == "success") {
      setIsPopupOpen(true);
      onModalidadeAdded();
      setTimeout(() => {
        setIsPopupOpen(false);
        onClose();
      }, 3000);
      clearFields();
    }
  };

  const clearFields = () => {
    setFormData({
        nome: '',
        tipo: '',
        desc: '',
        limit: '',
        value: ''
    });
};

  // Retorna o pop-up se 'isOpen' for true
  if (!isOpen) return null;

  return (
    <>
      {isPopupOpen && <PopUpError error={{ status: "sucess" }} />}
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
              placeholder="Nome" />
            <input
              type="text"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              className={Styles.input}
              placeholder="Descrição" />
            <input
              type="number"
              name="limit"
              value={formData.limit}
              onChange={handleChange}
              required
              className={Styles.input}
              placeholder="Limite de Jogadores" />
            <input
              type="number"
              name="value"
              value={formData.value}
              onChange={handleChange}
              required
              className={Styles.input}
              placeholder="Valor por Jogadores" />
            <select
              name="tipo"
              value={formData.modalidade}
              onChange={handleChange}
              required
              className={Styles.input}
              placeholder="Tipo"
            >
              <option value="">Tipo</option>
              <option value="false">1 versus 1</option>
              <option value="true">1 contra todos</option>
            </select>

            <button type="submit" className={Styles.btn}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormularioModalidade;