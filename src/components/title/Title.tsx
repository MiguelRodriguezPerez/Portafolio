import clsx from 'clsx';
import styles from '../../styles/title.module.css'

export const Title = () => {
  
    return (
        <h1 className={clsx(
            styles.title,
            "animate__animated",
            "animate__fadeIn"
        )}>Miguel Rodríguez Pérez</h1>
    );
}