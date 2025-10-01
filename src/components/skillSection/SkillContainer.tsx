import { backendSkills, devopsSkills, frontendSkills } from "../../interfaces";
import { SectionTitle } from "../../shared/SectionTitle";

import styles from '../../styles/skillSection/skillContainer.module.css'
import { SkillGrid } from "./SkillGrid";

export const SkillContainer = () => {
  
    return (
        <section className={ styles['skill-container'] }>
           <SectionTitle title="Habilidades" /> 
           <SkillGrid title="Frontend" arrSkill={ frontendSkills } />
           <SkillGrid title="Backend" arrSkill={ backendSkills } />
           <SkillGrid title="Devops" arrSkill={ devopsSkills } />
        </section>
    );
}