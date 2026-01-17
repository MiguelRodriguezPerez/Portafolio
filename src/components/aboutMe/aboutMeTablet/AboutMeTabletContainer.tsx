import { SectionTitle } from '../../../shared/SectionTitle';
import { AboutMeDescription, ContactList } from '../aboutMeInfo';
import { AboutMeTitlesTablet } from './AboutMeTitlesTablet';

import styles from '../../../styles/aboutMe/aboutMeTabletContainer.module.css';

export const AboutMeTabletContainer = () => {

    return (
        <section className={styles['aboutMeTabletContainer']}>
            <SectionTitle title='Sobre mí' />
            <AboutMeTitlesTablet/>
            <div>
                <AboutMeDescription />
                <ContactList />
            </div>
        </section>
    );
}