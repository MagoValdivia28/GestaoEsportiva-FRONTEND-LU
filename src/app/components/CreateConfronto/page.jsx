import styles from "./page.module.css";
import { useState, useEffect, useContext } from "react";
import { generateConfrontos } from "@/src/actions/api";
import { useParams } from "next/navigation";
import { AuthContext } from '@/src/contexts/AuthContext';
import PopUpError from '@/src/app/components/PopUpError';

const CreateConfronto = ({ onClick }) => {
    const { user, acessToken } = useContext(AuthContext);
    const { atvId } = useParams();
    const [inpDate, setInpDate] = useState(null);
    const [popUp, setPopUp] = useState(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleGenerate = async () => {
        if (!inpDate) {
            setPopUp({ status: "error", message: "Selecione uma data" });
            setTimeout(() => {
                setPopUp(null);
            }, 3000);
        } else {
            const response = await generateConfrontos(inpDate, "", user.id, atvId, acessToken);
            if (response.message == "Confrontos gerados com sucesso") {
                setPopUp({ status: "sucess", message: `${response.totalConfrontos} Confrontos Gerados!` });
                setTimeout(() => {
                    setPopUp(null);
                    window.location.reload();                    
                }, 3000);
            } else {
                setPopUp({ status: "error", message: response.message });
            }
        }

    };

    return (
        <div className={styles.popupBackground} onClick={onClick}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                <h2>Criar Confronto</h2>
                <input onChange={(e) => setInpDate(e.target.value)} type="date" />
                <button onClick={handleGenerate}>Gerar</button>
            </div>
            {
                popUp && (
                    <PopUpError error={popUp} />
                )
            }
        </div>
    );
};

export default CreateConfronto;