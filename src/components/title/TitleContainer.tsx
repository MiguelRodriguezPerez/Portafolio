import { Title, Subtitle, ContactList, Description } from './';

import styles from '../../styles/title/title.module.css';


export const TitleContainer = () => {

    return (
        <div className={styles['title-container']}>
            <Title/>
            {/* <TitleBar/> */}
            <Subtitle/>
            <Description/>
            <ContactList/>
        </div>
    );
}