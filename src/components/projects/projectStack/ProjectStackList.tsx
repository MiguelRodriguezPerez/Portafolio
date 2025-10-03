import { ProjectStackCard } from "./ProjectStackCard";

import styles from '../../../styles/projectSection/projectStyles.module.css'

export const ProjectStackList = ({ arrStack } : { arrStack: string[] }) => {
  
    return (
        <ul className={ styles['project-stack-list'] }>
            {
                arrStack.map(stackTool => <ProjectStackCard stackTool={ stackTool } />)
            }
        </ul>
    );
}