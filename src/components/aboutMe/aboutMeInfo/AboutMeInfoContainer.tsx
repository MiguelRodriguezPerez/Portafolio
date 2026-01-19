import { ContactList } from "./aboutMeContact";
import { AboutMeDescription } from "./AboutMeDescription";
import { AboutMeTitles } from "./AboutMeTitles";

import styles from '../../../styles/aboutMe/aboutMeInfo.module.css'


export const AboutMeInfoContainer = () => {

    return (
        <div className={styles.aboutMeInfoContainer}>
            <AboutMeTitles/>
            <AboutMeDescription />
            <ContactList />
        </div>
    );
}