import { DiCode } from 'react-icons/di';

import styles from '../../styles/heading/htmlNode.module.css'

export const HtmlNodeLogo = () => {
  
    return (
        <section className={ styles['node-section'] }>
            <div className={ styles['node-container'] }>
                <DiCode size={300} fill='#292940'/>
            </div>
        </section>
    );
}