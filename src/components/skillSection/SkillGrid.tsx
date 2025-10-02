import type { SkillInterface } from "../../interfaces";
import { SkillCard } from "./SkillCard";

import styles from '../../styles/skillSection/skillContainer.module.css'

export const SkillGrid = ({ title, arrSkill } : { title: string, arrSkill: SkillInterface[] }) => {
  
    return (
        <div className={ styles['skill-div']}>
            <h3 className={styles['skill-section-title']}>{ title }</h3>
            <ul className={ styles['skill-list']}>
                {
                    arrSkill.map(skill => <SkillCard skill={skill}/>)
                }
            </ul>
        </div>
    );
}