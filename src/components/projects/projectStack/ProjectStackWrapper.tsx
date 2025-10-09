import type { ProjectInterface } from "../../../interfaces/projects";
import { ProjectRepos, ProjectStackTagList } from "./";

import styles from '../../../styles/projectSection/projectStyles.module.css';

export const ProjectStackWrapper = ({ project }: { project: ProjectInterface }) => {

    return (
        <section className={styles['project-stack-section']}>
            <ProjectStackTagList stackTags={ project.stackTags }/>
            <ProjectRepos project={ project } />
        </section>
    );
}