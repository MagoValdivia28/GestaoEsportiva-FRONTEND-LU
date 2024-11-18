"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import logo from '@/assets/imagens/logo.png';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);

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

    const handleLoginClick = () => {
        window.location.href = '/login';
    };

    return (
        <header className={styles.header}>
            <Link className={styles.buttonHome} href={"/"}>
                <Image src={logo} className={styles.logo} width={130} height={130} />
            </Link>

            <div className={styles.profileIcon}>
                <button className={styles.profileButton} onClick={togglePopup}>
                    <FaUser size={20} />
                </button>
                {showPopup && (
                    <div ref={popupRef} className={styles.popup}>
                        <button className={styles.logoutButton}>Logout</button>
                        <button className={styles.loginButton} onClick={handleLoginClick}>Login</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

