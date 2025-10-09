import { arrProjects } from '../../interfaces/projects/project.interface';
import { ProjectCard } from './ProjectCard';

import styles from '../../styles/projectSection/projectStyles.module.css'

export const ProjectList = () => {
  
    return (
        <ul className={styles['project-list']}>
            {
                arrProjects.map(project => <ProjectCard project={ project } key={ project.name }/>)
            }
        </ul>
    );
}