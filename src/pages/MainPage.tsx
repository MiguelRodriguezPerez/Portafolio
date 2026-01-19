import { HeadingContainer } from "../components";
import { AboutMeWrapper } from "../components/aboutMe/AboutMeWrapper";
import { ProjectContainer } from "../components/projects/ProjectContainer";
import { SkillContainer } from "../components/skillSection";


export const MainPage = () => {

    return (
        <main>
            <HeadingContainer/>
            <SkillContainer />
            <ProjectContainer />
            <AboutMeWrapper/>
        </main>
    );
}