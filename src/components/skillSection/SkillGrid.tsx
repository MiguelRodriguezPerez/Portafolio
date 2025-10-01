import type { SkillInterface } from "../../interfaces";
import { SkillCard } from "./SkillCard";

export const SkillGrid = ({ title, arrSkill } : { title: string, arrSkill: SkillInterface[] }) => {
  
    return (
        <div>
            <h3>{ title }</h3>
            <ul>
                {
                    arrSkill.map(skill => <SkillCard skill={skill}/>)
                }
            </ul>
        </div>
    );
}