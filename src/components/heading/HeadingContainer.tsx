import { ContactList } from './contact';
import { Description, Subtitle, Title, TitleBar } from './title';
import { HtmlNodeLogo } from './HtmlNodeLogo';

import styles from '../../styles/heading/heading.module.css';

export const HeadingContainer = () => {
  
    return (
        <header className={ styles['heading-container'] }>
            <Title/>
            <HtmlNodeLogo/>
            <Subtitle />
            <TitleBar/>
            <Description />
            <ContactList />
        </header>
    );
}