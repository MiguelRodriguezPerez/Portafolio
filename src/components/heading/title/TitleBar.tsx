import { DiCode } from "react-icons/di";
import { useWindowWidth } from "@react-hook/window-size";

import styles from '../../../styles/heading/title.module.css';

export const TitleBar = () => {

    const width = useWindowWidth();
  
    return (
         width < 700 && (
            <div className={styles["title-bar-div"]}>
                <hr className={styles["title-bar"]} />
                <DiCode
                size={60}
                fill="black"
                style={{
                    background: "white",
                    margin: "0 auto",
                    borderRadius: "50%",
                }}
                />
            </div>
        )
    );
}