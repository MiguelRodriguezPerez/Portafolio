import styles from '../../../styles/heading/title.module.css';
import liStyles from '../../../styles/heading/contact.module.css';

export const DownloadCvButton = () => {
  
    return (
        <li className={liStyles['contact-li']}>
            <button className={styles['cv-button']}>
                Descargar CV
            </button>
        </li>
    );    
}