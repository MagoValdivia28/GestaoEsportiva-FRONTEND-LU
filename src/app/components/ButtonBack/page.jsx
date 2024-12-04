import styles from "./page.module.css";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { useRouter } from 'next/navigation';

const ButtonBack = () => {
  const router = useRouter();
  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };
  return (
    <button className={styles.backButton} onClick={handleBack}>
      <HiOutlineArrowSmLeft size={30} />
    </button>
  );
};

export default ButtonBack;
