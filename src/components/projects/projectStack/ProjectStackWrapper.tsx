import { ProjectStackCard } from "./ProjectStackCard";

import styles from '../../../styles/projectSection/projectStyles.module.css'
import type { ProjectInterface } from "../../../interfaces/projects";
import { ProjectRepoButton } from "./ProjectRepoButton";

export const ProjectStackWrapper = ({ project }: { project: ProjectInterface }) => {

    return (
        <ul className={styles['project-stack-list']}>
            {
                project.stackTags.map(stackTag => <ProjectStackCard stackTool={ stackTag } key={ stackTag } />)
            }
            <ProjectRepoButton repoLink={ project.frontendRepo } key={ `${project.name}_${project.frontendRepo.name}` } />
            <ProjectRepoButton repoLink={ project.backendRepo } key={ `${project.name}_${project.backendRepo.name}`}/>
        </ul>
    );
}