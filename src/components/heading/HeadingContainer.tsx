import { Titles } from './title';
import { ContactList } from '../aboutMe';
import styles from '../../styles/heading/heading.module.css';


export const HeadingContainer = () => {

    return (
        <header className={styles['heading-container']}>
            <Titles />

            <ContactList />
        </header>
    );
}