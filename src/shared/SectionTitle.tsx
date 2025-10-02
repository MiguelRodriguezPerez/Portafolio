import styles from '../styles/shared/sectionTitle.module.css';

export const SectionTitle = ({ title } : { title: string }) => {
  
    return (
        <h2 className={styles['section-title']}>{ title }</h2>
    );
}