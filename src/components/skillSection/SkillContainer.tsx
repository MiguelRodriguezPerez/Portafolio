import { backendSkills, devopsSkills, frontendSkills } from "../../interfaces";
import { SkillGrid } from "./SkillGrid";

import styles from '../../styles/skillSection/skillContainer.module.css';

export const SkillContainer = () => {
  
    return (
        <section className={ styles['skill-container'] }>
           <SkillGrid title="Front-End" arrSkill={ frontendSkills } />
           <SkillGrid title="Back-End" arrSkill={ backendSkills } />
           <SkillGrid title="DevOps" arrSkill={ devopsSkills } />
        </section>
    );
}