import { useWindowWidth } from "@react-hook/window-size";
import { AboutMeContainer } from "./AboutMeContainer";
import { AboutMeTabletContainer } from "./aboutMeTablet/AboutMeTabletContainer";

export const AboutMeWrapper = () => {

    const width = useWindowWidth();

    return (
        <>
            {
                width > 1400 ? <AboutMeContainer /> : <AboutMeTabletContainer />
            }
        </>
    );
}