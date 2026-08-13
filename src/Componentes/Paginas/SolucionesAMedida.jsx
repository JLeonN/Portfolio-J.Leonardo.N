import {
  FaArrowRight,
  FaCheckCircle,
  FaDatabase,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLightbulb,
  FaLinkedin,
  FaSyncAlt,
  FaTools,
  FaWhatsapp,
  FaWrench,
} from "react-icons/fa";

const mensajeWhatsApp = "Hola Leo. Vi tu página y tengo una tarea o proceso en mi negocio que creo que se podría simplificar o automatizar. Te cuento cómo lo hacemos actualmente:";
const enlaceWhatsApp = `https://wa.me/59895747743?text=${encodeURIComponent(mensajeWhatsApp)}`;

const servicios = [
  {
    titulo: "Automatización de tareas",
    descripcion: "Reduzco pasos repetitivos como copiar datos, preparar documentos, actualizar registros, enviar información o publicar contenido. Cuando aporta valor, también puedo integrar inteligencia artificial.",
    icono: FaSyncAlt,
  },
  {
    titulo: "Organización y conexión de información",
    descripcion: "Ordeno información dispersa y conecto las herramientas que ya utilizás para evitar cargas duplicadas, búsquedas innecesarias y errores manuales.",
    icono: FaDatabase,
  },
  {
    titulo: "Herramientas hechas a medida",
    descripcion: "Si una automatización no alcanza, desarrollo una aplicación, sistema web, herramienta de escritorio o panel específico para el proceso que necesitás mejorar.",
    icono: FaTools,
  },
];

const problemas = [
  "Información repartida entre papel, planillas y distintas herramientas.",
  "Datos que una persona debe copiar, revisar o preparar todos los días.",
  "Procesos específicos que no encajan bien en una solución genérica.",
];

const pasos = [
  "Conversamos sobre cómo se realiza actualmente la tarea.",
  "Identifico los pasos que generan demoras, errores o trabajo innecesario.",
  "Propongo y construyo una primera solución simple y útil.",
  "La probamos en el trabajo real y la mejoramos según los resultados.",
];

function SolucionesAMedida() {
  return (
    <main className="pagina-soluciones-medida">
      <section className="portada-soluciones-medida">
        <div>
          <p className="etiqueta-soluciones-medida">Soluciones para procesos reales</p>
          <p className="presentacion-personal-soluciones-medida">
            Soy Leo, desarrollador de herramientas y automatizaciones a medida.
          </p>
          <h1>¿Hay tareas repetitivas que te hacen perder tiempo todos los días?</h1>
          <p className="texto-portada-soluciones-medida">
            Analizo cómo trabaja tu negocio y creo soluciones para reducir tareas
            manuales, ordenar información y simplificar procesos.
          </p>
          <div className="acciones-soluciones-medida">
            <a className="boton-soluciones-principal" href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
              Contame qué tarea te hace perder tiempo <FaWhatsapp />
            </a>
            <a className="boton-soluciones-secundario" href="#casosReales">
              Ver casos reales
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
                No se trata de agregar tecnología porque sí. Primero entiendo el
                problema y después elijo la forma más práctica de resolverlo.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="seccion-soluciones-medida seccion-problemas-soluciones-medida">
        <p className="etiqueta-soluciones-medida">Punto de partida</p>
        <h2>Una mejora empieza por detectar dónde se pierde tiempo.</h2>
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
        <p className="etiqueta-soluciones-medida">Cómo puedo ayudarte</p>
        <h2>Primero está el problema. La tecnología viene después.</h2>
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

      <section id="casosReales" className="seccion-soluciones-medida caso-real-soluciones-medida">
        <div className="contenido-caso-soluciones-medida">
          <p className="etiqueta-soluciones-medida">Caso real · Bitácora II</p>
          <h2>Del papel a archivos listos para cargar.</h2>
          <p>
            En el sector de repuestos de una empresa uruguaya, las ubicaciones de
            más de 15.000 artículos se anotaban a mano. Después, otra persona debía
            copiar hojas completas a Excel y un solo código incorrecto podía obligar
            a revisar toda la carga.
          </p>
          <p>
            Creé Bitácora II específicamente para ese trabajo: permite registrar y
            consultar ubicaciones, preparar los archivos con la estructura necesaria
            y generar etiquetas. Hoy la utilizan más de diez personas todos los días.
          </p>
          <a
            className="enlace-caso-soluciones-medida"
            href="https://play.google.com/store/apps/details?id=bitacora.v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Bitácora II en Google Play <FaArrowRight />
          </a>
        </div>
        <div className="resultado-caso-soluciones-medida">
          <img src="/Imagenes/Bitácora-II.png" alt="Aplicación Bitácora II" />
          <div>
            <span>Resultado</span>
            <p>Menos transcripción manual, archivos consistentes y consultas rápidas en una herramienta hecha para ese proceso.</p>
          </div>
        </div>
      </section>

      <section className="seccion-soluciones-medida caso-real-soluciones-medida">
        <div className="contenido-caso-soluciones-medida">
          <p className="etiqueta-soluciones-medida">Caso real · Precio Justo</p>
          <h2>Una aplicación conectada con su web y sus redes.</h2>
          <p>
            Precio Justo necesitaba explicar claramente su propuesta y mantener
            presencia en redes sin preparar y publicar manualmente cada contenido.
            Desarrollé una landing y un flujo de automatización bajo demanda para
            resolver el proceso completo.
          </p>
          <p>
            Al ejecutarlo, el sistema prepara el texto y la imagen, publica en
            Facebook, Instagram e Historias y envía a Discord un informe con el
            resultado o los errores. No es necesario abrir ni operar las redes
            manualmente.
          </p>
          <div className="enlaces-caso-soluciones-medida">
            <a className="enlace-caso-soluciones-medida" href="https://jleonn.github.io/PrecioJustoWeb/#/" target="_blank" rel="noopener noreferrer">
              Ver la web <FaArrowRight />
            </a>
            <a className="enlace-caso-soluciones-medida" href="https://www.facebook.com/profile.php?id=61590710220868" target="_blank" rel="noopener noreferrer">
              <FaFacebookF /> Facebook
            </a>
            <a className="enlace-caso-soluciones-medida" href="https://www.instagram.com/preciojustoapp/" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
        <div className="resultado-caso-soluciones-medida">
          <img src="/Imagenes/PrecioJusto-Icono.png" alt="Aplicación Precio Justo" />
          <div>
            <span>Resultado</span>
            <p>Landing y publicaciones conectadas en un único flujo, probado y actualmente utilizado en producción.</p>
          </div>
        </div>
      </section>

      <section className="seccion-soluciones-medida seccion-proceso-soluciones-medida">
        <p className="etiqueta-soluciones-medida">Forma de trabajo</p>
        <h2>Entender, simplificar, construir y mejorar.</h2>
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
            actualizar la herramienta y sumar mejoras cuando el uso real muestre
            nuevas necesidades.
          </p>
        </div>
      </section>

      <section id="contactoSoluciones" className="contacto-soluciones-medida">
        <div>
          <p className="etiqueta-soluciones-medida">Hablemos del problema</p>
          <h2>¿Hay una tarea que hoy te hace perder tiempo?</h2>
          <p>Contame cómo la realizás actualmente y vemos si existe una forma práctica de simplificarla.</p>
        </div>
        <div className="acciones-contacto-soluciones-medida">
          <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> Contame por WhatsApp</a>
          <a href="mailto:jorgebike.75@gmail.com"><FaEnvelope /> Escribirme por correo</a>
          <a href="https://www.linkedin.com/in/j-l-n-técnico/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> Ver LinkedIn</a>
        </div>
      </section>

      <footer className="pie-soluciones-medida">
        <FaCheckCircle aria-hidden="true" />
        <span>Problemas reales. Soluciones prácticas y hechas a medida.</span>
      </footer>
    </main>
  );
}

export default SolucionesAMedida;
