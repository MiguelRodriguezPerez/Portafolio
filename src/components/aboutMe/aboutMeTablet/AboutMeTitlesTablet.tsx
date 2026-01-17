import { IoLocationSharp } from "react-icons/io5";
import styles from '../../../styles/aboutMe/aboutMeTabletContainer.module.css';
import titleStyles from '../../../styles/aboutMe/aboutMeInfo.module.css';
import { AboutMePfp } from "../AboutMePfp";

export const AboutMeTitlesTablet = () => {
  
    return (
        <div className={ styles.aboutMeTitlesTablet }>
            <AboutMePfp/>
            <div>
                <h3>Miguel Rodríguez Pérez</h3>
                <div className={ titleStyles.aboutMeSubtitleContainer }>
                    <IoLocationSharp size={23}/>
                    <small>{'A Coruña (Ciudad)'}</small>
                </div>
            </div>
        </div>
    );
}