import { SectionTitle } from '../../../shared/SectionTitle';
import { AboutMeDescription, ContactList } from '../aboutMeInfo';
import { AboutMeTitlesTablet } from './AboutMeTitlesTablet';

import styles from '../../../styles/aboutMe/aboutMeTabletContainer.module.css';
import infoStyles from '../../../styles/aboutMe/aboutMeInfo.module.css';

export const AboutMeTabletContainer = () => {

    return (
        <section className={styles['aboutMeTabletContainer']}>
            <SectionTitle title='Sobre mí' />
            <AboutMeTitlesTablet/>
            <div className={infoStyles.aboutMeInfoContainer}>
                <AboutMeDescription />
                <ContactList />
            </div>
        </section>
    );
}