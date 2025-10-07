import type { ProjectInterface } from "../../../interfaces/projects";
import { ProjectRepoButton } from "./ProjectRepoButton";

import styles from '../../../styles/projectSection/projectStyles.module.css';

export const ProjectRepos = ({ project } : { project: ProjectInterface}) => {
  
    return (
        <div className={ styles['project-repo-container'] }>
            <ProjectRepoButton repoLink={ project.frontendRepo } key={ `${project.name}_${project.frontendRepo.name}` } />
            <ProjectRepoButton repoLink={ project.backendRepo } key={ `${project.name}_${project.backendRepo.name}`}/>
        </div>
    );
}