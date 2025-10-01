import { contactList } from "../../interfaces";
import { ContactButton } from "./ContactButton";

import styles from '../../styles/contact.module.css';

export const ContactList = () => {
  
    return (
        <ul className={styles['contact-list-container']}>
            {
                contactList.map(contact => <ContactButton contactData={contact}/>)
            }
        </ul>
    );
}