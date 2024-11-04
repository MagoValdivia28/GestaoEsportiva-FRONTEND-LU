"use client";
import React, { useState } from 'react';
import CadastroPopup from '../components/PopUpEquipes';

const Teste = () =>  { 
  
  // Estado para controlar se o popup está aberto
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Função para abrir o popup 
  
  const openPopup = () => { setIsPopupOpen(true); }; 
  
  // Função para fechar o popup
  const closePopup = () => { setIsPopupOpen(false); };
  return (
    <main>
    <button onClick={openPopup}>Abrir Cadastro</button>
     {/* Renderizando o CadastroPopup */}
      <CadastroPopup isOpen={isPopupOpen} onClose={closePopup} />
    </main>
  )
}

export default Teste