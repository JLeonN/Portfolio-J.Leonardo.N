import { FaArrowDown, FaFileDownload, FaFilePdf, FaLinkedin } from "react-icons/fa";

function Comienzo() {
  return (
    <section id="inicio" className="seccionPortada">
      <div className="resplandorPortada resplandorPortadaUno" />
      <div className="resplandorPortada resplandorPortadaDos" />
      <div className="contenedorPrincipal contenidoPortada">
        <div className="presentacionPortada">
          <p className="etiquetaPortada">Desarrollo interno y mejora continua</p>
          <h1>Jorge Leonardo <span>Núñez</span></h1>
          <p className="descripcionPortada">
            Desarrollo y mejoro herramientas digitales a medida para empresas:
            aplicaciones web, móviles, de escritorio y automatizaciones que
            acompañan el trabajo real de cada equipo.
          </p>
          <p className="detallePortada">
            Mi objetivo es integrarme al equipo, entender los procesos y aportar
            mejoras constantes para que cada solución sea más útil con el tiempo.
          </p>
          <div className="accionesPortada">
            <a
              className="botonPrincipal"
              href="https://www.linkedin.com/in/j-l-n-técnico/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> Conectar por LinkedIn
            </a>
            <a
              className="botonSecundario"
              href="/C.V/C.V.Programación.pdf"
              download="CV - Jorge Leonardo Núñez.pdf"
            >
              <FaFileDownload /> Ver mi CV
            </a>
          </div>
          <div className="formacion-ia-portada">
            <p>Formación continua en inteligencia artificial</p>
            <span>
              Estudio y aplico IA para crear soluciones más útiles, automatizar
              procesos y acompañar mejores decisiones.
            </span>
            <div className="certificados-ia-portada">
              <a href="/Documentos/CertificadoCursoIA.pdf" target="_blank" rel="noopener noreferrer">
                <FaFilePdf /> Curso de IA
              </a>
              <a href="/Documentos/CertificadoDesarrolloIA.pdf" target="_blank" rel="noopener noreferrer">
                <FaFilePdf /> Desarrollo con IA
              </a>
            </div>
          </div>
        </div>
        <div className="marcoFotoPerfil">
          <div className="orbitaFoto" />
          <img src="/Imagenes/FotoPerfil.jpeg" alt="Jorge Leonardo Núñez" />
          <p>Web · Móvil · Escritorio</p>
        </div>
      </div>
      <a className="indicadorDesplazamiento" href="#servicios" aria-label="Ir a servicios">
        <span>Explorar</span>
        <FaArrowDown />
      </a>
    </section>
  );
}

export default Comienzo;
