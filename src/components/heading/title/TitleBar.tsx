import { DiCode } from "react-icons/di";

import styles from '../../../styles/heading/titlebar.module.scss';
import clsx from "clsx";

export const TitleBar = () => {
  
    return (
            <div className={styles["title-bar-div"]}>
                <hr
                className={clsx(
                    styles["title-bar"],
                    styles["expand-line-animation"] // ← segunda clase
                )}
                />
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

    );
}