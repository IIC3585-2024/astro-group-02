import React from 'react';
import './Series.css';
// import movieImage from '../movie-display.png';

const Series = ({ serie }) => {
    return (
        <div className="movie">
            {/* <img src='/movie-display.png' alt={title} className="movie-image" /> */}
            <h3>{serie.nombre}</h3>
            <p>Servicio de Streaming: {serie.servicio}</p>
            <p>Temporadas: {serie.temporadas}</p>
            <p>Episodios por Temporada: {serie.episodiosPorTemporada}</p>
            <p>Descripción: {serie.descripcion}</p>
            <p>Categoría: {serie.categoria}</p>
            <p>Estrellas: {serie.promedioEstrellas.toFixed(1)} ({serie.numCalificaciones})</p>
            <button>Agregar Calificación</button>
            <button>Agregar Comentario</button>
        </div>
    );
};

export default Series;
