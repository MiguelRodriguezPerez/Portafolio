import type { ProjectInterface } from "../../interfaces/projects";

export const ProjectCard = ({ project }: { project: ProjectInterface }) => {

    return (
        <li>
            <h3>{project.name}</h3>
            <img src="" alt="" />
        </li>
    );
}