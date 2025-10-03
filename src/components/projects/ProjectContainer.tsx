import { SectionTitle } from "../../shared/SectionTitle";
import { ProjectDeploymentNote, ProjectList } from "./";

import styles from '../../styles/projectSection/projectStyles.module.css';

export const ProjectContainer = () => {
  
    return (
        <section className={ styles['project-container'] }>
            <SectionTitle title="Proyectos"/>
            <ProjectList/>
            <ProjectDeploymentNote/>
        </section>
    );
}