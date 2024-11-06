"use client"

import styles from './page.module.css';
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbCoins } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GiTennisCourt } from "react-icons/gi";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import imgtop from '../../../assets/imagens/ImgAapm.png'
import imgfut from '../../../assets/imagens/futzin.png'
import Image from 'next/image';


const Aapm = () => {
    const [Aapm, setAapm] = useState('');

    const sendAapm = () => {
        if (Aapm == '') {
            alert('O campo de Aapm não pode estar vazio');
            return;
        }
        emailjs.send('service_1q7z5qf', 'template_1q7z5qf', { message: Aapm }, 'user_1q7z5qf')
    }


    return (
        <main className={styles.main_container}>
            <div className={styles.firstIMG_container}>
                <div className={styles.img}>
                    <Image src={imgtop} className={styles.img} />

                </div>
            </div>

            <div className={styles.about_container}>
                <div className={styles.info_about_container}>
                    <h1>
                        Participe das Atividades
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maiores repellat sunt autem
                        explicabo quod voluptates aliquid ducimus
                        eligendi dolores nam dolore eveniet quaerat, natus fugiat ipsam officia rerum placeat.
                    </p>
                </div>

                <div className={styles.img_about_container}>
                    <Image src={imgfut} className={styles.imagem} />
                </div>
            </div>

            <div className={styles.MVV_container}>
                <div className={styles.iconMVV}>
                    <IoInformationCircleOutline className={styles.icon} />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur dicta molestiae earum provident inventore accusamus
                        deserunt neque ducimus, voluptas ullam ut maiores voluptatum soluta!
                        Modi suscipit facilis soluta in voluptatum.</p>
                </div>

                <div className={styles.iconMVV}>
                    <TbCoins className={styles.icon} />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur dicta molestiae earum provident inventore accusamus
                        deserunt neque ducimus, voluptas ullam ut maiores voluptatum soluta!
                        Modi suscipit facilis soluta in voluptatum.</p>
                </div>
                    <div className={styles.iconMVV}>
                        <CgProfile className={styles.icon} />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur dicta molestiae earum provident inventore accusamus
                            deserunt neque ducimus, voluptas ullam ut maiores voluptatum soluta!
                            Modi suscipit facilis soluta in voluptatum
                        </p>
                    </div>
            </div>
        </main >
    )
}

export default Aapm;