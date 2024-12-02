"use client";

import { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { logout } from '@/src/actions/user';
import { AuthContext } from '@/src/contexts/AuthContext';
import logo from '@/assets/imagens/logo.png';

const Header = () => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);
    const { getRefreshToken } = useContext(AuthContext);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setShowPopup(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        const response = getRefreshToken();
        logout(response);
        localStorage.clear();
        window.location.reload();
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link href="/" className={styles.logoLink}>
                    <Image src={logo} alt="Logo SENAI" width={100} height={100} className={styles.logo} />
                </Link>
            </div>

            <nav className={styles.nav}>
                <Link href="/campeonato" className={styles.navItem}>Campeonatos</Link>
                <Link href="/aapm" className={styles.navItem}>AAPM</Link>
                <Link href="/sobre" className={styles.navItem}>Sobre</Link>
            </nav>

            <div className={styles.profileContainer}>
                <button className={styles.profileButton} onClick={togglePopup}>
                    <FaUser size={24} />
                </button>
                {showPopup && (
                    <div ref={popupRef} className={styles.popup}>
                        <button className={styles.logoutButton} onClick={handleLogout}>Sair</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
