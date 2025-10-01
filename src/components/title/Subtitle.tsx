import { useEffect, useRef } from "react";
import Typed from "typed.js";

import styles from '../../styles/title.module.css'

export const Subtitle = () => {

    const ref = useRef(null);

    useEffect(() => {
        const texts = new Typed(ref.current, {
            strings: ['Typescript','React','Spring-Boot','Junior Webdev'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: false,
            onComplete() {
                texts.cursor.remove();
            }
        });

        return () => {
            texts.destroy();
        }
    },[])
  
    return (
        /* Al ejecutar la animación aparece otro span que se ve afectado por el grid column 1 */
        <div className={styles['subtitle-container']}>
            <span ref={ref}/>
        </div>
    );
}