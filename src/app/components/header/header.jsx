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

    // Toggle visibility of the profile popup
    const togglePopup = () => setShowPopup(prevState => !prevState);

    // Close the popup when clicked outside
    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setShowPopup(false);
        }
    };

    // Register and clean up the event listener for clicks outside
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle logout process
    const handleLogout = () => {
        const response = getRefreshToken();
        logout(response);
        localStorage.clear();
        window.location.reload();
    };

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.buttonHome}>
                <Image src={logo} alt="Logo" className={styles.logo} width={130} height={130} />
            </Link>

            <div className={styles.profileIcon}>
                <button className={styles.profileButton} onClick={togglePopup}>
                    <FaUser size={20} />
                </button>
                <div ref={popupRef} className={`${styles.popup} ${showPopup ? styles.show : ''}`}>
                    {showPopup && (
                        <button className={styles.logoutButton} onClick={handleLogout}>
                            sair
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
