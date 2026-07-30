import {
  FaAndroid,
  FaArrowRight,
  FaDesktop,
  FaEnvelope,
  FaFilePdf,
  FaGlobe,
  FaLightbulb,
  FaLinkedin,
  FaMobileAlt,
  FaTools,
  FaWhatsapp,
  FaWrench,
} from "react-icons/fa";

const enlaceWhatsApp = "https://wa.me/59895747743?text=Hola%20Jorge%2C%20vi%20tu%20p%C3%A1gina%20de%20Soluciones%20a%20medida%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20necesidad%20de%20mi%20comercio.";

const servicios = [
  {
    titulo: "Apps Android",
    descripcion: "Herramientas para usar en el local, depósito, reparto o visita a clientes, desde el celular.",
    icono: FaAndroid,
  },
  {
    titulo: "Herramientas de escritorio",
    descripcion: "Sistemas claros para ordenar clientes, stock, presupuestos, reportes y tareas internas.",
    icono: FaDesktop,
  },
  {
    titulo: "Páginas web",
    descripcion: "Catálogos, reservas y presencia online como complemento de una solución más completa.",
    icono: FaGlobe,
  },
];

const problemas = [
  "Pedidos, datos o controles anotados en papel.",
  "Información repartida entre WhatsApp, planillas y memoria.",
  "Tareas repetitivas que consumen tiempo todos los días.",
];

const pasos = [
  "Conversamos sobre cómo trabaja hoy tu negocio.",
  "Definimos una primera solución simple y útil.",
  "La desarrollamos, la probamos y la mejoramos con el uso.",
];

function SolucionesAMedida() {
  return (
    <main className="pagina-soluciones-medida">
      <section className="portada-soluciones-medida">
        <div>
          <p className="etiqueta-soluciones-medida">Soluciones digitales para comercios</p>
          <p className="presentacion-personal-soluciones-medida">
            Soy Jorge Leonardo Núñez, desarrollador de aplicaciones y herramientas a medida.
          </p>
          <h1>Tu negocio trabaja todos los días. Tu tecnología también debería ayudar.</h1>
          <p className="texto-portada-soluciones-medida">
            Creo aplicaciones Android y herramientas de escritorio a medida para
            ordenar procesos, ahorrar tiempo y trabajar con información más clara.
          </p>
          <div className="acciones-soluciones-medida">
            <a className="boton-soluciones-principal" href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
              Hablemos por WhatsApp <FaWhatsapp />
            </a>
            <a className="boton-soluciones-secundario" href="#casoBitacora">
              Ver un caso real
            </a>
          </div>
        </div>
        <aside className="resumen-portada-soluciones-medida">
          <div className="contenido-resumen-portada-soluciones-medida">
            <div className="contenedor-foto-soluciones-medida">
              <div className="marco-foto-soluciones-medida">
                <div className="orbita-foto-soluciones-medida" />
                <img src="/Imagenes/FotoPerfil.jpeg" alt="Jorge Leonardo Núñez" />
              </div>
            </div>
            <div className="mensaje-portada-soluciones-medida">
              <FaLightbulb aria-hidden="true" />
              <p>
                No se trata de agregar tecnología porque sí. Se trata de crear una
                herramienta que simplifique una necesidad real de tu comercio.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="seccion-soluciones-medida seccion-problemas-soluciones-medida">
        <p className="etiqueta-soluciones-medida">Punto de partida</p>
        <h2>Una mejora empieza por detectar qué está frenando el trabajo.</h2>
        <div className="grilla-problemas-soluciones-medida">
          {problemas.map((problema) => (
            <article key={problema}>
              <FaTools aria-hidden="true" />
              <p>{problema}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seccion-soluciones-medida">
        <p className="etiqueta-soluciones-medida">Qué puedo crear</p>
        <h2>Herramientas a medida, según cómo trabaja tu negocio.</h2>
        <div className="grilla-servicios-soluciones-medida">
          {servicios.map(({ titulo, descripcion, icono: Icono }) => (
            <article key={titulo}>
              <Icono aria-hidden="true" />
              <h3>{titulo}</h3>
              <p>{descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seccion-soluciones-medida formacion-ia-soluciones-medida">
        <p className="etiqueta-soluciones-medida">Formación profesional</p>
        <h2>Inteligencia artificial aplicada con aprendizaje continuo.</h2>
        <p>
          Me formo y actualizo en inteligencia artificial para identificar
          oportunidades de automatización y crear herramientas prácticas que
          ayuden a cada negocio a trabajar mejor.
        </p>
        <div className="certificados-ia-soluciones-medida">
          <a href="/Documentos/CertificadoCursoIA.pdf" target="_blank" rel="noopener noreferrer">
            <FaFilePdf /> Curso de IA
          </a>
          <a href="/Documentos/CertificadoDesarrolloIA.pdf" target="_blank" rel="noopener noreferrer">
            <FaFilePdf /> Desarrollo con IA
          </a>
        </div>
      </section>

      <section id="casoBitacora" className="seccion-soluciones-medida caso-bitacora-soluciones-medida">
        <div className="contenido-caso-soluciones-medida">
          <p className="etiqueta-soluciones-medida">Caso real</p>
          <h2>Bitácora II: una app creada desde una necesidad concreta.</h2>
          <p>
            Bitácora II nació para modernizar el registro de pedidos y ubicaciones
            en el trabajo diario. La app permite trabajar desde Android, reducir
            pasos manuales y mejorar la información disponible para el equipo.
          </p>
          <a
            className="enlace-bitacora-soluciones-medida"
            href="https://play.google.com/store/apps/details?id=bitacora.v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conocer Bitácora II <FaArrowRight />
          </a>
        </div>
        <div className="resultado-bitacora-soluciones-medida">
          <img src="/Imagenes/Bitácora-II.png" alt="Aplicación Bitácora II" />
          <div>
            <span>Resultado</span>
            <p>Una herramienta móvil conectada al proceso real y mejorada a partir del uso diario.</p>
          </div>
        </div>
      </section>

      <section className="seccion-soluciones-medida seccion-proceso-soluciones-medida">
        <p className="etiqueta-soluciones-medida">Forma de trabajo</p>
        <h2>Empezamos simple y mejoramos por etapas.</h2>
        <ol>
          {pasos.map((paso, indice) => (
            <li key={paso}>
              <span>0{indice + 1}</span>
              <p>{paso}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mantenimiento-soluciones-medida">
        <FaWrench aria-hidden="true" />
        <div>
          <h2>La entrega no tiene por qué ser el final.</h2>
          <p>
            También puedo acompañar el mantenimiento: corregir problemas,
            actualizar la herramienta y sumar mejoras cuando el negocio las necesite.
          </p>
        </div>
      </section>

      <section id="contactoSoluciones" className="contacto-soluciones-medida">
        <div>
          <p className="etiqueta-soluciones-medida">Hablemos</p>
          <h2>¿Hay una tarea que hoy te hace perder tiempo?</h2>
          <p>Contame cómo trabaja tu comercio y vemos juntos una forma práctica de mejorarlo.</p>
        </div>
        <div className="acciones-contacto-soluciones-medida">
          <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> Hablemos por WhatsApp</a>
          <a href="mailto:jorgebike.75@gmail.com"><FaEnvelope /> Escribirme por correo</a>
          <a href="https://www.linkedin.com/in/j-l-n-técnico/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> Ver LinkedIn</a>
        </div>
      </section>

      <footer className="pie-soluciones-medida">
        <FaMobileAlt aria-hidden="true" />
        <span>Aplicaciones Android, escritorio y web a medida.</span>
      </footer>
    </main>
  );
}

export default SolucionesAMedida;
