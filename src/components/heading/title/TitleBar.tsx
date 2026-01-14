import { DiCode } from "react-icons/di";

import styles from '../../../styles/heading/titles.module.css';

export const TitleBar = () => {


  
    return (
            <div className={styles["title-bar-div"]}>
                <hr className={styles["title-bar"]} />
                <DiCode
                size={45}
                fill="black"
                style={{
                    background: "white",
                    margin: "0 auto",
                    borderRadius: "50%",
                    zIndex: "4"
                }}
                />
            </div>
        )
}