import styles from '../../../styles/projectSection/projectStyles.module.css'

export const ProjectStackCard = ({ stackTool } : { stackTool: string }) => {
  
    return (
        <li className={ styles['project-stack-card'] }>
            { stackTool }
        </li>
    );
}