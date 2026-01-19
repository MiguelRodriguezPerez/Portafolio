import { SectionTitle } from "../../shared/SectionTitle";
import { AboutMeInfoContainer } from "./aboutMeInfo";
import { AboutMePfp } from "./AboutMePfp";

import styles from '../../styles/aboutMe/aboutMeContainer.module.css';

export const AboutMeContainer = () => {
  
    return (
        <section className={styles['about-me-container']}>
            <SectionTitle title="Sobre mí"/>
            <AboutMePfp/>
            <AboutMeInfoContainer/>
        </section>
    );
}