"use client";
import styles from './page.module.css';
import { useState } from 'react';
import { AuthContext } from '@/src/contexts/AuthContext';
import { useContext } from 'react';
import logo from "@/assets/imagens/logo.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormAuth = ({ setError }) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      if (name && password) {
        const response = await login(name, password);
        setError(response);
        setTimeout(() => {
          setError(null);
          if (response.status === "sucess") {
            router.back();
          }
        }, 3000);
      } else {
        setError({ status: "error", message: "Preencha todos os campos" });
        setTimeout(() => {
          setError(null);
        }, 3000);
      }

    }
    catch (error) {
      setError("Erro ao fazer login");
    }
  }

  return (
    <div className={styles.divpai}>
      <Image src={logo} id={styles.logo} width={130} height={130} />
      <div className={styles.form}>
        <h1 id={styles.h1}>Login</h1>
        <div className={styles.formdiv1}>
          <label htmlFor="name">Nome</label>
          <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" required />
        </div>
        <div className={styles.formdiv2}>
          <label htmlFor="password">Senha</label>
          <div className={styles.passwordContainer}>
            <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} id="password" name="password" required />
            <span onClick={() => setShowPassword(!showPassword)} className={styles.eyeIcon}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button onClick={handleLogin} className={styles.submitButton}>Entrar</button>
      </div>
    </div>
  );
}

export default FormAuth;