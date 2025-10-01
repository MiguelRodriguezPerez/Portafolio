import type { SkillInterface } from "../../interfaces"


export const SkillCard = ({ skill } : { skill: SkillInterface }) => {

  const Icon = skill.icon;

  return (
    <li>
      <div>
        <Icon/>
      </div>
      <span>{ skill.name }</span>
    </li>
  );
}
