import styles from "./About.module.css"

export default function About(props) {
    return(
        <div className={styles.aboutColor}>
              <h1>About</h1>
      <p>
        ¡Bienvenido a la aplicación de Rick y Morty! Explora tarjetas de personajes de la serie y descubre detalles interesantes.
      </p>
      <p>
        <strong>Tecnologías Utilizadas:</strong> React, Vite, Redux.
      </p>
      <p>
        <strong>GitHub:</strong> <a href="https://github.com/JohnRestrepo22/rick-and-morty-ft42b" target="_blank" rel="noopener noreferrer">Código Fuente en GitHub</a>
      </p>
      <p>
        <strong>Agradecimientos:</strong> A los TAs e instructores de Henry Bootcamp por su apoyo.
      </p>
      <p>
        <strong>Contacto:</strong> Correo Electrónico: <a href="mailto:restrepojohn228@gmail.com">restrepojohn228@gmail.com</a>
      </p>
      <p>
        <strong>Redes Sociales:</strong> <a href="https://github.com/JohnRestrepo22" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
        </div>
    )
}