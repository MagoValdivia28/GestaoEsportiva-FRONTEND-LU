"use client";
import styles from './page.module.css';
import { useState } from 'react';
import { signIn } from '@/src/actions/user';

const Teste = () => {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmut = () => {
        signIn(name, password);
    };

    return (
        <div className={styles.form}>
            <h1 id={styles.h1}>Login</h1>
            <div className={styles.formdiv1}>
                <label htmlFor="name">Nome</label>
                <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" required />
            </div>
            <div className={styles.formdiv2}>
                <label htmlFor="password">Senha</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
            </div>
            <button onClick={handleSubmut} className={styles.submitButton}>Entrar</button>
        </div>
    );
}

export default Teste;