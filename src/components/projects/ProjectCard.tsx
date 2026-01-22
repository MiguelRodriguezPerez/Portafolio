import type { ProjectInterface } from "../../interfaces/projects";
import { ProjectStackWrapper } from "./projectStack";
import { useWindowWidth } from "@react-hook/window-size";

import styles from '../../styles/projectSection/projectStyles.module.css';
import { useUpdateUserCookie } from "../../hooks/useUpdateUserCookie";

export const ProjectCard = ({ project }: { project: ProjectInterface }) => {

    const width = useWindowWidth();
    const { updateCookie } = useUpdateUserCookie();

    const clickEvent = async() => {
        window.open(project.prodUrl);
        updateCookie(project.clickedCallbackEvent);
    }

    return (
        <li className={styles['project-card']} onClick={clickEvent}>
            <img src={project.screenshotProjectRoute} alt={`${project.name}.png`} />
            <div className={styles['project-card-div']}>
                <h3>{project.name}</h3>
                {
                    width > 700 ?  <p>{project.description}</p> : <p>{project.phoneDescription}</p>
                }
                <ProjectStackWrapper project={ project } />
            </div>
        </li>
    );
}