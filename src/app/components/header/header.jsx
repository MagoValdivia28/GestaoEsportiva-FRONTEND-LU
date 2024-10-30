"use client";

import styles from './header.module.css';
import logo from '@/assets/imagens/logo.png';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

const Header = () => (
    <header>
        <Image src={logo} className={styles.logo} width={130} height={130} />
        <div className={styles.profileIcon}>
            <button className={styles.profileButton}>
                <FaUser size={20} />
            </button>
        </div>
    </header>
)

export default Header