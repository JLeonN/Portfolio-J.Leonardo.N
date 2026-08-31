import {
  FaFacebook,
  FaGithub,
  FaGooglePlay,
  FaInstagram,
} from "react-icons/fa";
import { TbRocket, TbWorld } from "react-icons/tb";
import GaleriaProyecto from "../Otros/GaleriaProyecto";

const iconosAccion = {
  github: FaGithub,
  web: TbWorld,
  landing: TbRocket,
  googlePlay: FaGooglePlay,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

function Proyectos({ proyecto }) {
  const {
    titulo,
    descripcion,
    imagen,
    tecnologias,
    enlaces,
    destacado,
    amplio,
    imagenes,
  } = proyecto;

  return (
    <article
      className={`tarjetaProyectoNueva ${destacado ? "destacada" : ""} ${amplio ? "proyectoAmplio" : ""}`}
    >
      <div className="cabeceraProyecto">
        <img src={imagen} alt={`Imagen del proyecto ${titulo}`} />
        <div>
          {destacado && <span className="etiquetaProyecto">Proyecto destacado</span>}
          <h3>{titulo}</h3>
        </div>
      </div>
      <p>{descripcion}</p>
      {imagenes && <GaleriaProyecto imagenes={imagenes} titulo={titulo} />}
      <div className="tecnologiasProyecto" aria-label={`Tecnologías de ${titulo}`}>
        {tecnologias.map((tecnologia) => (
          <span key={tecnologia}>{tecnologia}</span>
        ))}
      </div>
      <div className="accionesProyecto">
        {enlaces.map(({ tipo, url, etiqueta }) => {
          const Icono = iconosAccion[tipo];
          return (
            <a key={tipo} href={url} target="_blank" rel="noopener noreferrer">
              <Icono aria-hidden="true" /> {etiqueta}
            </a>
          );
        })}
      </div>
    </article>
  );
}

export default Proyectos;
