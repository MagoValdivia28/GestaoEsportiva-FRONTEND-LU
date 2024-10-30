"use client";
import React, { useState } from 'react';
import CadastroPopup from '../components/PopUpEquipes';



function MinhaPagina() {

      // Estado para controlar a exibição do pop-up
      const [isPopupOpen, setIsPopupOpen] = useState(false);

      // Função para abrir o pop-up
      const openPopup = () => setIsPopupOpen(true);
  
      // Função para fechar o pop-up
      const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="App">
        {/* Botão para abrir o pop-up */}
        <button onClick={openPopup}>Abrir Cadastro</button>

        {/* Chama o componente CadastroPopup e passa as props */}
        <CadastroPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
);
}

export default MinhaPagina;
