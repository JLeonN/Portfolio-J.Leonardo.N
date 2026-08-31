import {
  FaExternalLinkAlt,
  FaFilePdf,
  FaGithub,
  FaHandsHelping,
  FaLightbulb,
  FaNewspaper,
  FaPrint,
  FaRobot,
  FaTools,
  FaUserGraduate,
} from "react-icons/fa";
import {
  enlaceAplicacionCalculadoraPresupuestos,
  enlaceRepositorioCalculadoraPresupuestos,
} from "../../Datos/CalculadoraPresupuestos";

function JorgeNunez() {
  return (
    <main className="pagina-jorge-nunez">
      <section className="portada-jorge-nunez">
        <div className="contenido-portada-jorge-nunez">
          <p className="etiqueta-jorge-nunez">Propuesta de crecimiento</p>
          <h1>Jorge Núñez</h1>
          <p className="texto-principal-jorge-nunez">
            Una propuesta para aportar desde la inteligencia artificial, la
            capacitación interna, las automatizaciones y el desarrollo de
            software a medida.
          </p>
          <div className="acciones-jorge-nunez">
            <button type="button" onClick={() => window.print()}>
              <FaPrint />
              Imprimir propuesta
            </button>
            <a href="#certificados">
              <FaFilePdf />
              Ver certificados
            </a>
          </div>
        </div>
        <aside className="resumen-jorge-nunez">
          <p>
            Casi 9 años dentro de la empresa me dan contexto para detectar
            necesidades reales y convertirlas en herramientas simples, útiles y
            medibles, combinando conocimiento del trabajo diario con
            inteligencia artificial, automatizaciones y software a medida.
          </p>
        </aside>
        <div className="qr-portada-impresion-jorge-nunez">
          <img
            src="/Imagenes/QrPaginaJorgeNunez.svg"
            alt="QR para abrir la propuesta web de Jorge Núñez"
          />
          <p>https://jleonn.github.io/JorgeNunez</p>
        </div>
      </section>
      <section className="bloque-jorge-nunez">
        <div className="encabezado-bloque-jorge-nunez">
          <FaUserGraduate />
          <h2>Presentación personal</h2>
        </div>
        <p>
          Trabajo en la empresa desde hace casi nueve años. En ese recorrido
          conocí de cerca tareas, procesos, necesidades reales y formas de
          trabajo que muchas veces pueden mejorarse con herramientas simples,
          bien pensadas y adaptadas al día a día.
        </p>
        <p>
          Desde 2023 empecé a estudiar y usar inteligencia artificial de manera
          constante. Lo que comenzó como curiosidad se transformó en una línea de
          aprendizaje diario, probando herramientas, agentes, flujos de trabajo y
          formas prácticas de resolver problemas con más velocidad y mejor
          criterio.
        </p>
      </section>
      <section className="grilla-jorge-nunez">
        <article className="tarjeta-jorge-nunez">
          <FaRobot />
          <h2>IA aplicada al trabajo</h2>
          <p>
            Mi objetivo es acompañar y potenciar el uso de inteligencia
            artificial que ya existe dentro de la empresa: sumar criterio,
            ordenar procesos y mostrar nuevas formas de aprovecharla para
            analizar información, crear asistentes, documentar tareas y resolver
            necesidades concretas. <strong>La IA puede convertirse en una
            herramienta práctica para mejorar procesos reales.</strong>
          </p>
        </article>
        <article className="tarjeta-jorge-nunez">
          <FaLightbulb />
          <h2>Capacitación interna</h2>
          <p>
            Me interesa enseñar a compañeros a usar IA con criterio: cómo pedir
            mejor, cómo revisar respuestas, cómo trabajar con agentes y cómo
            transformar una consulta suelta en un proceso útil para el equipo.{" "}
            <strong>Capacitar también es una forma de mejorar el trabajo de
            todos.</strong>
          </p>
        </article>
        <article className="tarjeta-jorge-nunez">
          <FaHandsHelping />
          <h2>Enfoque humano y responsable</h2>
          <p>
            Mi intención no es reemplazar personas ni quitar valor al trabajo de
            nadie. Al contrario, creo que la inteligencia artificial puede ayudar
            a que cada compañero trabaje con más herramientas, menos carga
            repetitiva y más claridad para resolver problemas. La mejor
            oportunidad está en <strong>combinar la experiencia del equipo con
            nuevas herramientas.</strong>
          </p>
        </article>
        <article className="tarjeta-jorge-nunez">
          <FaTools />
          <h2>Automatizaciones</h2>
          <p>
            Actualmente estoy aprendiendo n8n porque lo veo como una herramienta
            muy potente para conectar servicios, reducir tareas manuales y crear
            flujos que ahorren tiempo sin depender siempre de sistemas grandes.{" "}
            <strong>Automatizar bien permite ahorrar tiempo sin perder control
            del proceso.</strong>
          </p>
        </article>
      </section>
      <section className="bloque-jorge-nunez">
        <div className="encabezado-bloque-jorge-nunez">
          <FaNewspaper />
          <h2>Casos reales cercanos</h2>
        </div>
        <p>
          La inteligencia artificial ya se está aplicando en empresas uruguayas
          para mejorar atención, ventas, búsquedas, procesos internos y toma de
          decisiones. Estos ejemplos no buscan copiar una solución exacta, sino
          mostrar que la oportunidad es real y cercana.
        </p>
        <div className="casos-reales-jorge-nunez">
          <article>
            <h3>Comercio online y búsqueda de productos</h3>
            <p>
              El Observador informó que Farmacia San Roque ya usa en Uruguay un
              buscador semántico con IA para entender mejor lo que busca el
              cliente. En el mismo artículo se menciona un caso de Umbro/Time
              Out donde la búsqueda con IA redujo búsquedas sin resultado y
              vinculó una parte importante del ingreso de la tienda a la
              personalización.
            </p>
            <a
              href="https://www.elobservador.com.uy/asi-nueve-herramientas-ia-uruguayas-cambian-la-forma-que-compras-online-y-no-te-diste-cuenta-n6041032"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              Fuente: El Observador
            </a>
            <div className="fuente-qr-jorge-nunez">
              <img
                src="/Imagenes/QrFuenteObservadorComercioIA.svg"
                alt="QR de la fuente de El Observador sobre IA en comercio online"
              />
              <p>
                https://www.elobservador.com.uy/asi-nueve-herramientas-ia-uruguayas-cambian-la-forma-que-compras-online-y-no-te-diste-cuenta-n6041032
              </p>
            </div>
          </article>
          <article>
            <h3>Atención, catálogo y agenda por chat</h3>
            <p>
              En otro relevamiento de El Observador sobre IA aplicada en
              Uruguay, Roma AI presentó asistentes capaces de responder por
              WhatsApp, consultar datos reales, agendar y hacer seguimiento. La
              nota menciona como ejemplo una automotora conectada a una planilla
              de stock para armar catálogo y coordinar visitas.
            </p>
            <a
              href="https://www.elobservador.com.uy/ciencia-y-tecnologia/que-ia-ya-se-usa-uruguay-seis-casos-concretos-presentados-el-latu-n6035659"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              Fuente: El Observador
            </a>
            <div className="fuente-qr-jorge-nunez">
              <img
                src="/Imagenes/QrFuenteObservadorLatuIA.svg"
                alt="QR de la fuente de El Observador sobre casos de IA en Uruguay"
              />
              <p>
                https://www.elobservador.com.uy/ciencia-y-tecnologia/que-ia-ya-se-usa-uruguay-seis-casos-concretos-presentados-el-latu-n6035659
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="bloque-destacado-jorge-nunez">
        <div>
          <p className="etiqueta-jorge-nunez">Software a medida</p>
          <h2>Bitácora II como ejemplo real</h2>
          <p>
            Bitácora II nació de una necesidad concreta del trabajo: modernizar
            el registro de pedidos y ubicaciones desde el celular. Al estar
            disponible en Android, se volvió práctica para usar en movimiento y
            permitió mejorar tareas reales con feedback directo de compañeros.
          </p>
          <p>
            Una de las mejoras más valoradas fue la generación rápida de
            etiquetas: permite crear más de 100 etiquetas en poco tiempo,
            evitando hacerlas una por una y reduciendo una tarea manual que antes
            consumía mucho más trabajo.
          </p>
          <p>
            Además, fue pensada para integrarse con lectores infrarrojos que la
            empresa ya utiliza, conectándose por Bluetooth para acelerar el
            escaneo sin depender de comprar herramientas nuevas.
          </p>
          <p>
            Este tipo de desarrollo muestra una oportunidad clara: crear
            soluciones internas pequeñas, específicas y ajustadas a cada área,
            sin esperar siempre por sistemas externos o procesos largos.
          </p>
        </div>
        <div className="acceso-bitacora-jorge-nunez">
          <img
            src="/Imagenes/QrBitacoraII.svg"
            alt="QR para abrir Bitácora II en Google Play"
          />
          <a
            href="https://play.google.com/store/apps/details?id=bitacora.v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
            Ver Bitácora II
          </a>
          <p>https://play.google.com/store/apps/details?id=bitacora.v2</p>
        </div>
      </section>
      <section
        id="casoCalculadoraPresupuestos"
        className="bloque-destacado-jorge-nunez caso-calculadora-jorge-nunez"
      >
        <div>
          <p className="etiqueta-jorge-nunez">Caso real para un cliente externo</p>
          <h2>Calculadora de presupuestos</h2>
          <p>
            Un profesional independiente del sector eléctrico preparaba sus
            presupuestos reutilizando una planilla de Excel. Necesitaba responder
            con mayor facilidad y entregar una presentación más clara a sus clientes.
          </p>
          <p>
            A partir de ese problema desarrollé una aplicación web que organiza
            clientes, lugares de trabajo, materiales y precios; calcula mano de obra,
            traslado y materiales; conserva cada presupuesto y prepara el documento
            final. También admite potenciales clientes y conceptos escritos en el
            momento, sin obligar a registrarlos previamente.
          </p>
          <p>
            La herramienta está entregada y en uso desde la web. Este trabajo demuestra
            mi capacidad para escuchar una necesidad externa, transformarla en un flujo
            concreto y construir una solución que puede seguir creciendo por módulos.
          </p>
          <div className="enlaces-calculadora-jorge-nunez">
            <a href={enlaceAplicacionCalculadoraPresupuestos} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Abrir aplicación
            </a>
            <a href={enlaceRepositorioCalculadoraPresupuestos} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Ver código
            </a>
          </div>
        </div>
        <img
          className="imagen-calculadora-jorge-nunez"
          src="/Imagenes/CalculadoraPresupuestosIcono.png"
          alt="Calculadora de presupuestos"
        />
      </section>
      <section className="bloque-jorge-nunez">
        <div className="encabezado-bloque-jorge-nunez">
          <FaLightbulb />
          <h2>Pequeñas mejoras medibles</h2>
        </div>
        <p>
          La idea no es empezar con grandes sistemas, sino con prototipos
          pequeños, medibles y fáciles de corregir. A partir de una necesidad
          concreta se puede probar una herramienta simple, usarla en un área
          puntual, escuchar feedback y mejorarla por etapas.
        </p>
        <p>
          Un camino posible sería crear paneles básicos para transformar datos
          diarios en información útil para decidir: registros de tareas,
          incidencias, movimientos, tiempos, pedidos o cualquier dato que hoy ya
          exista, pero que todavía no se esté aprovechando de forma clara.
        </p>
      </section>
      <section className="bloque-jorge-nunez ideas-impresion-jorge-nunez">
        <div className="encabezado-bloque-jorge-nunez">
          <FaLightbulb />
          <h2>Ideas para explorar</h2>
        </div>
        <div className="lista-ideas-jorge-nunez">
          <p>
            Crear asistentes internos para consultar procedimientos, criterios de
            trabajo o información frecuente.
          </p>
          <p>
            Automatizar reportes, avisos, registros o tareas administrativas que
            hoy consumen tiempo operativo.
          </p>
          <p>
            Desarrollar prototipos rápidos para probar mejoras antes de invertir
            en una solución más grande.
          </p>
          <p>
            Capacitar a equipos en el uso responsable y práctico de inteligencia
            artificial.
          </p>
        </div>
      </section>
      <section
        id="certificados"
        className="bloque-jorge-nunez certificados-impresion-jorge-nunez"
      >
        <div className="encabezado-bloque-jorge-nunez">
          <FaFilePdf />
          <h2>Certificados</h2>
        </div>
        <p>
          Estos certificados acompañan un proceso de aprendizaje que sigue en
          movimiento. La inteligencia artificial cambia muy rápido, por eso mi
          foco es mantenerme actualizado y llevar ese conocimiento a casos
          prácticos.
        </p>
        <div className="certificados-jorge-nunez">
          <a
            href="/Documentos/CertificadoCursoIA.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf />
            Curso de IA
          </a>
          <a
            href="/Documentos/CertificadoDesarrolloIA.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf />
            Desarrollo con IA
          </a>
        </div>
        <div className="certificados-qr-jorge-nunez">
          <article>
            <img
              src="/Imagenes/QrCertificadoCursoIA.svg"
              alt="QR del certificado Curso de IA"
            />
            <p>Certificado Curso de IA</p>
            <span>https://jleonn.github.io/Documentos/CertificadoCursoIA.pdf</span>
          </article>
          <article>
            <img
              src="/Imagenes/QrCertificadoDesarrolloIA.svg"
              alt="QR del certificado Desarrollo con IA"
            />
            <p>Certificado Desarrollo con IA</p>
            <span>
              https://jleonn.github.io/Documentos/CertificadoDesarrolloIA.pdf
            </span>
          </article>
        </div>
      </section>
      <section className="cierre-jorge-nunez">
        <h2>Solicitud de conversación</h2>
        <p>
          Si esta propuesta resulta interesante para la empresa, me gustaría
          solicitar una reunión con gerencia para conversar la idea, escuchar
          prioridades y evaluar juntos qué oportunidades podrían tener más
          impacto.
        </p>
      </section>
    </main>
  );
}

export default JorgeNunez;
