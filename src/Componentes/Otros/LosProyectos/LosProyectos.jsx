import Proyectos from "../../Paginas/Proyectos";
import {
  enlaceAplicacionCalculadoraPresupuestos,
  enlaceRepositorioCalculadoraPresupuestos,
} from "../../../Datos/CalculadoraPresupuestos";

const proyectos = [
  {
    titulo: "Calculadora de presupuestos",
    imagen: "/Imagenes/CalculadoraPresupuestosIcono.png",
    descripcion: "Aplicación web responsive creada para un profesional independiente del sector eléctrico. Sustituye una planilla de Excel por un flujo que organiza clientes y materiales, calcula presupuestos y genera una presentación profesional.",
    tecnologias: ["Vue", "Quasar", "TypeScript", "Capacitor"],
    destacado: true,
    enlaces: [
      { tipo: "web", etiqueta: "Abrir aplicación", url: enlaceAplicacionCalculadoraPresupuestos },
      { tipo: "github", etiqueta: "Ver código", url: enlaceRepositorioCalculadoraPresupuestos },
    ],
  },
  {
    titulo: "Precio Justo",
    imagen: "/Imagenes/PrecioJusto-Icono.png",
    descripcion: "Aplicación web y móvil para comparar precios, escanear códigos de barras, gestionar listas de seguimiento y encontrar mejores ofertas.",
    tecnologias: ["Vue", "Quasar", "Capacitor"],
    destacado: true,
    enlaces: [
      { tipo: "web", etiqueta: "Ver web", url: "https://jleonn.github.io/PrecioJusto/#/" },
      { tipo: "landing", etiqueta: "Ver landing", url: "https://jleonn.github.io/PrecioJustoWeb/#/" },
      { tipo: "googlePlay", etiqueta: "Google Play", url: "https://play.google.com/store/apps/details?id=com.preciojusto.app" },
      { tipo: "facebook", etiqueta: "Facebook", url: "https://www.facebook.com/profile.php?id=61590710220868" },
      { tipo: "instagram", etiqueta: "Instagram", url: "https://www.instagram.com/preciojustoapp/" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/PrecioJusto" },
    ],
  },
  {
    titulo: "Bitácora II",
    imagen: "/Imagenes/Bitácora-II.png",
    descripcion: "App móvil para modernizar el registro de pedidos y ubicaciones, con escaneo, generación de Excel y mejoras guiadas por feedback real.",
    tecnologias: ["Vue", "Quasar", "Capacitor"],
    destacado: true,
    enlaces: [
      { tipo: "web", etiqueta: "Ver proyecto", url: "https://jleonn.github.io/Bit-cora-2-App-1/#/" },
      { tipo: "googlePlay", etiqueta: "Google Play", url: "https://play.google.com/store/apps/details?id=bitacora.v2" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/Bit-cora-2-App-1" },
    ],
  },
  {
    titulo: "Ta-Te-Ti: Vs IA Invencible",
    imagen: "/Imagenes/Ta-Te-Ti512x512.png",
    descripcion: "Juego móvil con tres niveles de dificultad, lógica de juego avanzada, puntuación, rachas animadas y una interfaz optimizada para celular.",
    tecnologias: ["Vue", "Quasar", "Capacitor"],
    enlaces: [
      { tipo: "googlePlay", etiqueta: "Google Play", url: "https://play.google.com/store/apps/details?id=com.leotateti.tateti" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/TaTeTi" },
    ],
  },
  {
    titulo: "Pokédex",
    imagen: "/Imagenes/Pokeball.png",
    descripcion: "Aplicación web que consulta PokéAPI para buscar Pokémon y mostrar tipos, estadísticas y evoluciones de forma clara.",
    tecnologias: ["Vue", "JavaScript", "API"],
    enlaces: [
      { tipo: "web", etiqueta: "Ver web", url: "https://jleonn.github.io/Pokedex/" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/Pokedex" },
    ],
  },
  {
    titulo: "Cronómetro App",
    imagen: "/Imagenes/CronómetroApp.png",
    descripcion: "Aplicación Android desarrollada con React Native y Expo para medir tiempos con precisión desde el celular. Incluye controles de inicio, pausa y detención dentro de una interfaz liviana, clara y optimizada para uso táctil.",
    tecnologias: ["React Native", "Expo", "Android"],
    enlaces: [
      { tipo: "googlePlay", etiqueta: "Google Play", url: "https://play.google.com/store/apps/details?id=com.yojorge.Nombredemiproyecto" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/Cronometro-APP" },
    ],
  },
  {
    titulo: "Cronómetro Web",
    imagen: "/Imagenes/CronómetroWeb.jpg",
    descripcion: "Herramienta web desarrollada con React para medir tiempos directamente desde el navegador. Ofrece un flujo simple de inicio, pausa y detención, con una experiencia accesible y sin instalación.",
    tecnologias: ["React", "JavaScript", "CSS"],
    enlaces: [
      { tipo: "web", etiqueta: "Ver web", url: "https://jleonn.github.io/Cronometro/" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/Cronometro" },
    ],
  },
  {
    titulo: "The Cowboys",
    imagen: "/Imagenes/Cowboys - 4.png",
    descripcion: "Proyecto colaborativo donde participé en el desarrollo del front-end de una web diaria y compartible para amigos.",
    tecnologias: ["React", "Bootstrap", "JavaScript"],
    enlaces: [
      { tipo: "web", etiqueta: "Ver web", url: "https://thecowboys.lol/" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/the-cowboy-day" },
    ],
  },
  {
    titulo: "Bitácora",
    imagen: "/Imagenes/Bitácora.jpg",
    descripcion: "Programa de escritorio para registrar tareas, pedidos, incidencias y perfiles de compañeros en una computadora compartida.",
    tecnologias: ["React", "Electron", "JavaScript"],
    enlaces: [
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/Bit-cora" },
    ],
  },
  {
    titulo: "Subscriptions Tracker",
    imagen: "/Imagenes/SubscriptionsTracker.jpg",
    descripcion: "Aplicación web para controlar suscripciones mensuales y conocer el presupuesto disponible con mayor claridad.",
    tecnologias: ["React", "JavaScript", "CSS"],
    enlaces: [
      { tipo: "web", etiqueta: "Ver web", url: "https://jleonn.github.io/Subscriptions-Tracker/" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/Subscriptions-Tracker" },
    ],
  },
];

function LosProyectos() {
  return (
    <section id="proyectos" className="seccionPrincipal seccionProyectos">
      <div className="contenedorPrincipal">
        <p className="etiquetaSeccion">Trabajo aplicado</p>
        <h2>Proyectos que resuelven problemas</h2>
        <p className="introduccionSeccion">
          Cada proyecto representa una necesidad, una idea o un aprendizaje
          llevado a una experiencia real y funcional.
        </p>
        <div className="grillaProyectos">
          {proyectos.map((proyecto) => <Proyectos key={proyecto.titulo} proyecto={proyecto} />)}
        </div>
      </div>
    </section>
  );
}

export default LosProyectos;
