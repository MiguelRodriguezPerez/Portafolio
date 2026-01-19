import { IoLocationSharp } from "react-icons/io5";
import styles from '../../../styles/aboutMe/aboutMeTabletContainer.module.css';
import titleStyles from '../../../styles/aboutMe/aboutMeInfo.module.css';
import { AboutMePfp } from "../AboutMePfp";
import { useWindowWidth } from "@react-hook/window-size";

export const AboutMeTitlesTablet = () => {

    const width = useWindowWidth();
  
    return (
        <div className={ styles.aboutMeTitlesTablet }>
            <AboutMePfp/>
            <div>
                <h3>Miguel Rodríguez Pérez</h3>
                <div className={ titleStyles.aboutMeSubtitleContainer }>
                    <IoLocationSharp size={ width > 700 ? '28px' : '30px' }/>
                    <small>{'A Coruña (Ciudad)'}</small>
                </div>
            </div>
        </div>
    );
}