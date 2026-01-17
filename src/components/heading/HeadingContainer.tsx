import { useTrackUser } from '../../hooks/useTrackUser';
import styles from '../../styles/heading/heading.module.css';
import { Titles } from './title';


export const HeadingContainer = () => {

   useTrackUser();

    return (
        <header className={styles['heading-container']}>
            <Titles />
        </header>
    );
}