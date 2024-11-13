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
import imgVolei from '../../../assets/imagens/boladevoleift.jpg'
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
                        Participe das Atividades e
                    </h1>
                    <h2>aproveite os benefícios!</h2>
                    <p>
                    Participe gratuitamente das atividades esportivas e aproveite os benefícios!
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


            <div className={styles.about_container}>
            <div className={styles.img_about_container}>
                    <Image src={imgVolei} className={styles.imagem2} />
                </div>
                <div className={styles.info_about_container}>
                    <h1>
                        Sobre Nós
                    </h1>
                    <p className={styles.paragrafo}>
                    Na AAPM, você desfruta de uma ampla gama de benefícios, abrangendo tanto o esporte quanto o ambiente escolar. Aqui, você tem acesso a diversas vantagens que enriquecem sua experiência acadêmica e esportiva.
                    </p>
                    <p className={styles.paragrafo}>
                    No âmbito escolar, os membros da AAPM têm direito a armários individuais, proporcionando maior comodidade e segurança para guardar seus pertences. Além disso, você pode aproveitar descontos exclusivos na compra de camisas e uniformes escolares, permitindo que você esteja sempre bem-apresentado e confortável.
                    </p>
                    <p className={styles.paragrafo}>
                    No campo esportivo, a AAPM oferece acesso privilegiado a diversas instalações esportivas, incentivando a prática de atividades físicas que promovem saúde e bem-estar. Sejam treinos regulares ou competições esportivas, você encontrará todo o apoio necessário para desenvolver suas habilidades e alcançar seus objetivos.
                    </p>
                    <p className={styles.paragrafo}>
                    Ao fazer parte da AAPM, você não só usufrui de benefícios práticos e tangíveis, mas também se integra a uma comunidade que valoriza o crescimento pessoal e acadêmico, incentivando sempre o espírito de equipe e a camaradagem.
                    </p>
                </div>

               
            </div>
         



         
        </main >
    )
}

export default Aapm;