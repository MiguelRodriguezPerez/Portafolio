import type { ProjectInterface } from "../../interfaces/projects";
import { ProjectStackList } from "./projectStack";

import styles from '../../styles/projectSection/projectStyles.module.css';

export const ProjectCard = ({ project }: { project: ProjectInterface }) => {

    const clickEvent = () => {
        window.open(project.prodUrl);
    }

    return (
        <li className={ styles['project-card'] } onClick={ clickEvent }>
            <img src={project.screenshotProjectRoute} alt={`${project.name}.png`} /> 
            <div className={styles['project-card-div']}>
                <h3>{ project.name }</h3>
                <p>{ project.description }</p>
                <ProjectStackList arrStack={ project.stackTags } />
            </div>
        </li>
    );
}