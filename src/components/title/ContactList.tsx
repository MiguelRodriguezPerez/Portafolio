import { contactList } from "../../interfaces";
import { ContactButton } from "./ContactButton";

import styles from '../../styles/title/contact.module.css';

export const ContactList = () => {

    return (
        <ul className={styles['contact-list-container']}>
            {
                contactList.map(contact => <ContactButton contactData={contact} key={contact.name} />)
            }
        </ul>
    );
}