

import styles from '../../styles/heading/heading.module.scss';
import { ContactList } from './contact';
import { TitleBar } from './title';
import { Titles } from './Titles';

export const HeadingContainer = () => {
  
    return (
        <header className={ styles['heading-container'] }>
            <Titles/>
            <TitleBar/>
            <ContactList/>
        </header>
    );
}