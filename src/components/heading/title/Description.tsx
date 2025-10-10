import styles from '../../../styles/heading/title.module.css';

export const Description = () => {

    return (
        <div>
            <p className={ styles.description }>
                ¡Hola! Soy Miguel, un joven programador al que le encanta desarrollar software
                y aprender resolviendo problemas, así como trabajar con herramientas
                que hagan el desarrollo más fácil.
            </p>
            <p className={ styles.description }>
                Me gusta lo simple y sencillo, como las dependencias que resuelven problemas en pocos pasos
                como 
                {' '} <a href='https://zustand.docs.pmnd.rs/getting-started/introduction' target='_blank' rel="noopener noreferrer">Zustand</a>,
                {' '} <a href='https://www.npmjs.com/package/clsx' target='_blank' rel="noopener noreferrer">Clsx</a>,
                {' '}  <a href='https://www.baeldung.com/java-validation'target='_blank' rel="noopener noreferrer">las validaciones de Jakarta</a>
                {' '}o el diseño de este portafolio.
            </p>
        </div>

    );
}