import { contactList } from "../../../../interfaces";
import { ContactItem } from "./ContactItem";

import styles from '../../../../styles/aboutMe/contact.module.css';
import { DownloadCvButton } from "./DownloadCvButton";

export const ContactList = () => {

    return (
        <div className={styles['contact-list-container']}>
            <ul className={styles['contact-list-socials']}>
                {
                    contactList.map(contact => <ContactItem contactData={contact} key={contact.name} />)
                }
            </ul>
            <DownloadCvButton/>
        </div>

    );
}