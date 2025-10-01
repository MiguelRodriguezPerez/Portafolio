import { SectionTitle } from "../../shared/SectionTitle";

import styles from '../../styles/skillSection/skillContainer.module.css'

export const SkillContainer = () => {
  
    return (
        <section className={styles['skill-container']}>
           <SectionTitle title="Habilidades" /> 
        </section>
    );
}