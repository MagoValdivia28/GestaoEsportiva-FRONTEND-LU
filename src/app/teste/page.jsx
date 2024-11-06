"use client";
import React, { useState } from 'react';
import FormularioModalidade from '../components/PopUpModalidade';

const Teste = () => {
    // Estado para controlar se o pop-up está aberto ou fechado
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    // Função para abrir o pop-up
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    // Função para fechar o pop-up
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
    return (
      <div className="app-container">
        <h1>Bem-vindo ao App</h1>
        
        {/* Botão para abrir o pop-up */}
        <button onClick={openPopup}>Abrir Formulário de Cadastro</button>
  
        {/* Chama o CadastroPopup e passa as props para controlar a visibilidade */}
        <FormularioModalidade isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    );
  };
    
    export default Teste;