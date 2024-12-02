"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Links de navegação */}
                <div className={styles.navLinks}>
                    <Link href="/sobre" className={styles.link}>Sobre</Link>
                    <Link href="/contato" className={styles.link}>Contato</Link>
                    <Link href="/politica-de-privacidade" className={styles.link}>
                        Política de Privacidade
                    </Link>
                </div>

                {/* Redes sociais */}
                <div className={styles.socialMedia}>
                    <a
                        href="https://www.facebook.com/SENAI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.instagram.com/SENAI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/SENAI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaLinkedin />
                    </a>
                </div>

                {/* Direitos autorais */}
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} SENAI. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
