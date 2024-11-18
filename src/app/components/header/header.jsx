"use client";

import { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import logo from '@/assets/imagens/logo.png';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { logout } from '@/src/actions/user';
import { AuthContext } from '@/src/contexts/AuthContext';

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
    }

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
                        <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

