import type { SkillInterface } from "../../interfaces"

import styles from '../../styles/skillSection/skillContainer.module.css';
import svgStyle from '../../styles/shared/svgDiv.module.css';

export const SkillCard = ({ skill } : { skill: SkillInterface }) => {

  const Icon = skill.icon;

  return (
    <li className={styles['skill-card']}>
      <div className={svgStyle['svg-container']}>
        <Icon size={24}/>
      </div>
      <span>{ skill.name }</span>
    </li>
  );
}
