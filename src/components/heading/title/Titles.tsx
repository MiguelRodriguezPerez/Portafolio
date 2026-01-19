import styles from '../../../styles/heading/titles.module.css';
import { TitleBar } from './TitleBar';

export const Titles = () => {

    return (
        <>
            <div className={styles.revealUp}>
                <h1 className={styles['heading-title']}>Miguel Rodríguez</h1>
            </div>

            <TitleBar/>

            <div className={styles.revealDown}>
                <h2 className={styles['heading-subtitle']}>Junior Webdev</h2>
            </div>
        </>
    );
}