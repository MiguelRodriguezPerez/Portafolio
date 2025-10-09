import { FaGithub } from "react-icons/fa";
import type { RepoLink } from "../../../interfaces/projects";

import styles from '../../../styles/projectSection/projectStyles.module.css'

export const ProjectRepoButton = ({ repoLink } : { repoLink: RepoLink }) => {

    const clickEvent = () => {
        window.open(repoLink.link);
    }
  
    return (
        <button className={ styles['project-repo'] } onClick={ clickEvent }>
            <span>{ repoLink.name }</span>
            <FaGithub size={23} color="#34aeeb"/>
        </button>
    );
}