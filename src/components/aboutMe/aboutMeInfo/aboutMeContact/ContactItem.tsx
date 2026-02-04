import clsx from "clsx";
import type { contactInterface } from "../../../../interfaces";

import styles from '../../../../styles/aboutMe/contact.module.css';
import svgStyle from '../../../../styles/shared/svgDiv.module.css';


export const ContactItem = ({ contactData }: { contactData: contactInterface }) => {

    const Icon = contactData.icon;

    const clickEvent = () => {
        window.open(contactData.link);
    }

    return (
        <li onClick={clickEvent} className={clsx(
            styles['contact-li']
        )}>
            <div className={svgStyle['svg-container']}>
                <Icon size={26} />
            </div>
            <span>{contactData.name}</span>
        </li>
    );
}