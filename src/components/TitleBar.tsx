import { DiCode } from "react-icons/di";

import styles from '../styles/title.module.css';

export const TitleBar = () => {
  
    return (
        <div className={styles['title-bar-div']}>
            <hr className={styles['title-bar']}>
            </hr>
            <DiCode size={60} fill="black" style={{
                background: 'white',
                margin: '0px auto',
                borderRadius: '50%'
                }}/>
        </div>
    );
}