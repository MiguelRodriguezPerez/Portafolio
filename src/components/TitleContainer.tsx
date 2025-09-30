import { Title, TitleBar, Subtitle } from './';

import styles from '../styles/title.module.css';

export const TitleContainer = () => {

    return (
        <div className={styles['title-container']}>
            <Title/>
            <TitleBar/>
            <Subtitle/>
        </div>
    );
}