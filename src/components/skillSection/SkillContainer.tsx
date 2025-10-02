import { backendSkills, devopsSkills, frontendSkills } from "../../interfaces";
import { SectionTitle } from "../../shared/SectionTitle";
import { SkillGrid } from "./SkillGrid";

import styles from '../../styles/skillSection/skillContainer.module.css'

export const SkillContainer = () => {
  
    return (
        <section className={ styles['skill-container'] }>
           <SectionTitle title="Habilidades" /> 
           <SkillGrid title="Front-End" arrSkill={ frontendSkills } />
           <SkillGrid title="Back-End" arrSkill={ backendSkills } />
           <SkillGrid title="DevOps" arrSkill={ devopsSkills } />
        </section>
    );
}