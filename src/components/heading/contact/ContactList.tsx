import { contactList } from "../../../interfaces";
import { ContactButton } from "./ContactButton";

import styles from '../../../styles/heading/contact.module.css';
import { DownloadCvButton } from "./DownloadCvButton";

export const ContactList = () => {

    return (
        <ul className={styles['contact-list-container']}>
            {
                contactList.map(contact => <ContactButton contactData={contact} key={contact.name} />)
            }
            <DownloadCvButton/>
        </ul>
    );
}