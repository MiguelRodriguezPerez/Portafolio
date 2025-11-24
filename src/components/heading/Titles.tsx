import clsx from 'clsx';
import styles from '../../styles/heading/titles.module.scss';
import "animate.css";


export const Titles = () => {
  
    return (
        <div className={styles['titles-container']}>
            <h1 className={clsx(
                'animate__animated',
                'animate__fadeInUp'
            )}>Miguel Rodríguez</h1>
            <h2 className={clsx(
                'animate__animated',
                'animate__fadeInUp'
            )}>Web developer</h2>
        </div>
    );
}