import styles from '../../../styles/heading/titles.module.css';
import { TitleBar } from './TitleBar';

export const Titles = () => {

    return (
        <>
            <h1 className={styles['heading-title']}>Miguel Rodríguez</h1>
            <TitleBar/>
            <h2 className={styles['heading-subtitle']}>Junior Webdev</h2>
        </>
    );
}