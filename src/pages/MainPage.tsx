import { ProjectContainer } from "../components/projects/ProjectContainer";
import { SkillContainer } from "../components/skillSection";
import { TitleContainer } from "../components/title";

export const MainPage = () => {

    return (
        <main>
            <TitleContainer />
            <SkillContainer/>
            <ProjectContainer/>
        </main>
    );
}