import { IoLocationSharp } from "react-icons/io5";

import styles from '../../../styles/aboutMe/aboutMeInfo.module.css';

export const AboutMeTitles = () => {
  
    return (
        <>
            <h3>Miguel Rodríguez Pérez</h3>
            <div className={ styles.aboutMeSubtitleContainer }>
                <IoLocationSharp size={23}/>
                <small>{'A Coruña (Ciudad)'}</small>
            </div>
        </>
    );
}