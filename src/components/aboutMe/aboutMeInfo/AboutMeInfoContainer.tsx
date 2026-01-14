import { ContactList } from "./aboutMeContact";
import { AboutMeDescription } from "./AboutMeDescription";
import { AboutMeInfoTitles } from "./AboutMeInfoTitles";

export const AboutMeInfoContainer = () => {
  
    return (
        <div>
            <AboutMeInfoTitles/>
            <AboutMeDescription/>
            <ContactList/>
        </div>
    );
}