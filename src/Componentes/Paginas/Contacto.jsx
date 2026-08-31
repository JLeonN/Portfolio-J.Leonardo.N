import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

function Contacto() {
  return (
    <section id="contacto" className="seccionContacto">
      <div className="contenedorPrincipal contenidoContacto">
        <div>
          <p className="etiquetaSeccion">¿Buscás mejorar procesos desde adentro?</p>
          <h2>Conversemos sobre cómo puedo aportar a tu equipo</h2>
          <p>
            Me interesa formar parte de un equipo, conocer sus desafíos y crear
            mejoras sostenidas con aplicaciones, automatizaciones e IA aplicada
            con criterio humano.
          </p>
        </div>
        <div className="accionesContacto">
          <a href="mailto:jorgebike.75@gmail.com"><FaEnvelope /> Enviar correo</a>
          <a href="https://www.linkedin.com/in/j-l-n-técnico/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/JLeonN" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          <a href="/C.V/C.V.Programación.pdf" download="CV - Jorge Leonardo Núñez.pdf"><FaFileDownload /> Descargar CV</a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
