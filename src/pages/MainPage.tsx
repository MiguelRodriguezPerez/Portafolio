import { HeadingContainer } from "../components";
import { ProjectContainer } from "../components/projects/ProjectContainer";
import { SkillContainer } from "../components/skillSection";


export const MainPage = () => {

    return (
        <main>
            <HeadingContainer/>
            <SkillContainer />
            <ProjectContainer />
        </main>
    );
}