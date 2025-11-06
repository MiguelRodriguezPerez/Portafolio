import { contactList } from "../../../interfaces";
import { ContactButton } from "./ContactButton";

import styles from '../../../styles/heading/contact.module.css';
import { DownloadCvButton } from "./DownloadCvButton";

export const ContactList = () => {

    return (
        <div className={styles['contact-list-container']}>
            <ul className={styles['contact-list-socials']}>
                {
                    contactList.map(contact => <ContactButton contactData={contact} key={contact.name} />)
                }
            </ul>
            <DownloadCvButton/>
        </div>
        
    );
}