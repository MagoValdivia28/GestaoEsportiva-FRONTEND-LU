"use client";
import styles from './page.module.css';
import { useState } from 'react';
import { AuthContext } from '@/src/contexts/AuthContext';
import { useContext } from 'react';
import logo from "@/assets/imagens/logo.png";
import Image from 'next/image';

const FormAuth = () => {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const { signInContext, user, acessToken } = useContext(AuthContext);

    const handleSubmit = async () => {
        const response = await signInContext(name, password);
        console.log(response);
    };

    return (
        <div className={styles.divpai}>
          <Image src={logo} id={styles.logo} width={130} height={130} />
          <div className={styles.form}>
            <h1 id={styles.h1}>Login</h1>
            <div className={styles.formdiv1}>
              <label htmlFor="email">Email</label>
              <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" required />
            </div>
            <div className={styles.formdiv2}>
              <label htmlFor="password">Senha</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
            </div>
            <button onClick={handleSubmit} className={styles.submitButton}>Entrar</button>
          </div>
        </div>
      );
}

export default FormAuth;