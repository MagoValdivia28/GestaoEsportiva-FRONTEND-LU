"use client";

import { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import styles from "./header.module.css";
import logo from "@/assets/imagens/logo.png";
import { AuthContext } from "@/src/contexts/AuthContext";
import { logout } from "@/src/actions/user";

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
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
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
            {/* Logo e link para a home */}
            <Link href="/" className={styles.logoContainer}>
                <Image src={logo} alt="Logo SENAI" className={styles.logo} width={120} height={120} />
            </Link>

            {/* Navegação */}
            <nav className={styles.nav}>
                <Link href="/campeonatos" className={styles.navItem}>
                    Campeonatos
                </Link>
                <Link href="/aapm" className={styles.navItem}>
                    AAPM
                </Link>
                <Link href="/sobre" className={styles.navItem}>
                    Sobre
                </Link>
            </nav>

            {/* Ícone do perfil */}
            <div className={styles.profileContainer}>
                <button className={styles.profileButton} onClick={togglePopup}>
                    <FaUser size={20} />
                </button>
                {showPopup && (
                    <div ref={popupRef} className={styles.popup}>
                        <button className={styles.logoutButton} onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
