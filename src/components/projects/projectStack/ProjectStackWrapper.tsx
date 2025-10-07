import { ProjectStackCard } from "./ProjectStackCard";

import styles from '../../../styles/projectSection/projectStyles.module.css'
import type { ProjectInterface } from "../../../interfaces/projects";
import { ProjectRepoButton } from "./ProjectRepoButton";

export const ProjectStackWrapper = ({ project }: { project: ProjectInterface }) => {

    return (
        <ul className={styles['project-stack-list']}>
            {
                project.stackTags.map(stackTag => <ProjectStackCard stackTool={ stackTag } />)
            }
            <ProjectRepoButton repoLink={ project.frontendRepo } />
            <ProjectRepoButton repoLink={ project.backendRepo } />
        </ul>
    );
}