import { IoLocationSharp } from "react-icons/io5";
import { useWindowWidth } from "@react-hook/window-size";

import styles from '../../../styles/aboutMe/aboutMeInfo.module.css';

export const AboutMeTitles = () => {
  const width = useWindowWidth();
  const text = width > 700 ? 'A Coruña (Ciudad)' : 'A Coruña';

  return (
    <>
      <h3>Miguel Rodríguez Pérez</h3>
      <div className={styles.aboutMeSubtitleContainer}>
        <IoLocationSharp size={23} />
        <small>{text}</small>
      </div>
    </>
  );
};
