"use client"
import styles from './page.module.css';
import logo from "../../../assets/imagens/logo.png";
import { useState } from 'react';
import Image from 'next/image';
import FormAuth from '@/src/app/components/FormAuth';
import PopUpError from '@/src/app/components/PopUpError';
import { useRouter } from 'next/navigation';
import { getAPI } from '@/src/actions/api';
import { useContext } from 'react';

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  return (
    <>
      {error && <PopUpError error={error} />}
      <div className={styles.divpai}>
        <Image src={logo} id={styles.logo} width={130} height={130} />
        <FormAuth setError={setError} />
      </div>
    </>
  );
};

export default Login;                                                                  