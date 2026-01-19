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
                            position: 'relative',
                            display: 'block',
                            background: "white",
                            margin: "0 auto",
                            borderRadius: "50%",
                            zIndex: "30",
                            width: "fit-content"
                        }}
                    />

            </div>
        )
}