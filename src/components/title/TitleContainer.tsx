import { Title, Subtitle, ContactList, Description } from './';

import styles from '../../styles/title/title.module.css';


export const TitleContainer = () => {

    return (
        <header className={styles['title-container']}>
            <Title/>
            {/* <TitleBar/> */}
            <Subtitle/>
            <Description/>
            <ContactList/>
        </header>
    );
}