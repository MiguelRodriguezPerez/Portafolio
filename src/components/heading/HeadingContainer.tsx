import { ContactList } from './contact';
import { Titles } from './title';

import styles from '../../styles/heading/heading.module.css';
import { useTrackUser } from '../../hooks/useTrackUser';

export const HeadingContainer = () => {

   useTrackUser();

    return (
        <header className={styles['heading-container']}>
            <Titles />
            <ContactList />
        </header>
    );
}