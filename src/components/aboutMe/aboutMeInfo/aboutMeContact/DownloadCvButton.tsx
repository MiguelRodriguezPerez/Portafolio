import { FaFileAlt } from "react-icons/fa";

import styles from '../../../../styles/aboutMe/contact.module.css';

export const DownloadCvButton = () => {
  
    return (
        <div className={styles['cv-button-container']}>
            <a className={styles['cv-button']} download='MiguelRodriguezCv.pdf' href='/files/MiguelRodriguezCv.pdf'>
                <FaFileAlt size={18}/>
                <span>Descargar CV</span>
            </a>
        </div>
    );    
}