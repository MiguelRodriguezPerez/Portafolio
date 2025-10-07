import { ProjectStackCard } from './ProjectStackCard';

import styles from '../../../styles/projectSection/projectStyles.module.css'


export const ProjectStackTagList = ({ stackTags } : { stackTags: string[] }) => {
  
    return (
        <ul className={styles['project-stack-tag-list']}>
            {
                stackTags.map(stackTag => <ProjectStackCard stackTool={ stackTag } key={ stackTag } />)
            }
        </ul>
    );
}