import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function GaleriaProyecto({ imagenes, titulo }) {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const posicionInicialToque = useRef(null);

  if (!imagenes?.length) return null;

  const cambiarImagen = (desplazamiento) => {
    setIndiceActivo((indiceActual) =>
      (indiceActual + desplazamiento + imagenes.length) % imagenes.length
    );
  };

  const registrarInicioToque = (evento) => {
    posicionInicialToque.current = evento.touches[0]?.clientX ?? null;
  };

  const registrarFinToque = (evento) => {
    if (posicionInicialToque.current === null) return;

    const posicionFinal = evento.changedTouches[0]?.clientX ?? posicionInicialToque.current;
    const desplazamiento = posicionFinal - posicionInicialToque.current;
    posicionInicialToque.current = null;

    if (Math.abs(desplazamiento) < 45) return;
    cambiarImagen(desplazamiento > 0 ? -1 : 1);
  };

  const imagenActiva = imagenes[indiceActivo];

  return (
    <section className="galeria-proyecto" aria-label={`Galería de ${titulo}`}>
      <div
        className="visor-galeria-proyecto"
        onTouchStart={registrarInicioToque}
        onTouchEnd={registrarFinToque}
      >
        <button
          type="button"
          className="control-galeria-proyecto control-anterior-galeria-proyecto"
          onClick={() => cambiarImagen(-1)}
          aria-label="Ver imagen anterior"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
        <figure aria-live="polite">
          <img src={imagenActiva.src} alt={imagenActiva.alt} loading="lazy" />
          <figcaption>{imagenActiva.descripcion}</figcaption>
        </figure>
        <button
          type="button"
          className="control-galeria-proyecto control-siguiente-galeria-proyecto"
          onClick={() => cambiarImagen(1)}
          aria-label="Ver imagen siguiente"
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>
      <div className="indicadores-galeria-proyecto" aria-label="Seleccionar imagen">
        {imagenes.map((imagen, indice) => (
          <button
            type="button"
            key={imagen.src}
            className={indice === indiceActivo ? "activo" : ""}
            onClick={() => setIndiceActivo(indice)}
            aria-label={`Ver imagen ${indice + 1} de ${imagenes.length}`}
            aria-current={indice === indiceActivo ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default GaleriaProyecto;
