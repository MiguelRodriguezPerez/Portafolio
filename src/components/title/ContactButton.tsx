import clsx from "clsx";
import type { contactInterface } from "../../interfaces";

import styles from '../../styles/contact.module.css';

export const ContactButton = ({ contactData } : { contactData: contactInterface }) => {

    const Icon = contactData.icon

    const clickEvent = () => {
        window.open(contactData.link);
    }
  
    return (
        <li onClick={clickEvent} className={clsx(
            styles['contact-li']
        )}>
            <div className={styles['svg-container']}>
                <Icon size={24}/>
            </div>
            <span>{ contactData.name}</span>
        </li>
    );
}