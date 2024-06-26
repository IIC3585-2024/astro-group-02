import React from 'react';
import './Series.css';

const Series = ({ serie }) => {
    const url = `/serie?id=${serie.id}`;
    return (
            <div className="movie" > 
            <a className="redirect" href={url}>
                    <h3>{serie.name}</h3>
                    <p>Servicio de Streaming: {serie.service}</p>
                    <p>Descripción: {serie.description}</p>
                    <p>Estrellas: {serie.promedioEstrellas.toFixed(1)} ({serie.numCalificaciones})</p>
                </a>
            </div>
    );
};

export default Series;
