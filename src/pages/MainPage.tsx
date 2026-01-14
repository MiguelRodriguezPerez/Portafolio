import { HeadingContainer } from "../components";
import { AboutMeContainer } from "../components/aboutMe";
import { ProjectContainer } from "../components/projects/ProjectContainer";
import { SkillContainer } from "../components/skillSection";


export const MainPage = () => {

    return (
        <main>
            <HeadingContainer/>
            <SkillContainer />
            <ProjectContainer />
            <AboutMeContainer/>
        </main>
    );
}