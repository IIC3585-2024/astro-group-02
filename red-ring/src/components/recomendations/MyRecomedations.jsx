// src/components/MovieRecommendation.js

import React, { useEffect, useState } from 'react';
import './myRecomendations.css';
import './MovieRecommendation.css';
import Series from '../serie/Series';

const MyRecomendations = () => {
    const [series, setSeries] = useState([{
        id: 1,
        nombre: 'Yerko Series',
        servicio: 'Netflix',
        temporadas: 5,
        episodiosPorTemporada: [8, 9, 8, 8],
        descripcion: 'A group of kids deals with supernatural events in their small town.',
        categoria: 'Drama, Fantasy, Horror',
        promedioEstrellas: 8.7,
        numCalificaciones: 250
    }]);


    useEffect(() => {
        const seriesData = [
            {
                id: 1,
                nombre: 'Yerko Series',
                servicio: 'Netflix',
                temporadas: 5,
                episodiosPorTemporada: [8, 9, 8, 8],
                descripcion: 'A group of kids deals with supernatural events in their small town.',
                categoria: 'Drama, Fantasy, Horror',
                promedioEstrellas: 8.7,
                numCalificaciones: 250
            },
            {
                id: 1,
                nombre: 'Yerko Series',
                servicio: 'Netflix',
                temporadas: 5,
                episodiosPorTemporada: [8, 9, 8, 8],
                descripcion: 'A group of kids deals with supernatural events in their small town.',
                categoria: 'Drama, Fantasy, Horror',
                promedioEstrellas: 8.7,
                numCalificaciones: 250
            },
                        {
                id: 1,
                nombre: 'Yerko Series',
                servicio: 'Netflix',
                temporadas: 5,
                episodiosPorTemporada: [8, 9, 8, 8],
                descripcion: 'A group of kids deals with supernatural events in their small town.',
                categoria: 'Drama, Fantasy, Horror',
                promedioEstrellas: 8.7,
                numCalificaciones: 250
            },
            {
                id: 1,
                nombre: 'Yerko Series',
                servicio: 'Netflix',
                temporadas: 5,
                episodiosPorTemporada: [8, 9, 8, 8],
                descripcion: 'A group of kids deals with supernatural events in their small town.',
                categoria: 'Drama, Fantasy, Horror',
                promedioEstrellas: 8.7,
                numCalificaciones: 250
            },
            {
                id: 1,
                nombre: 'Yerko Series',
                servicio: 'Netflix',
                temporadas: 5,
                episodiosPorTemporada: [8, 9, 8, 8],
                descripcion: 'A group of kids deals with supernatural events in their small town.',
                categoria: 'Drama, Fantasy, Horror',
                promedioEstrellas: 8.7,
                numCalificaciones: 250
            }, {
                id: 1,
                nombre: 'Yerko Series',
                servicio: 'Netflix',
                temporadas: 5,
                episodiosPorTemporada: [8, 9, 8, 8],
                descripcion: 'A group of kids deals with supernatural events in their small town.',
                categoria: 'Drama, Fantasy, Horror',
                promedioEstrellas: 8.7,
                numCalificaciones: 250
            },
            // Agrega más series según sea necesario
        ];

        setSeries(seriesData);
    }
        , [])

    return (
        <div className='movie-recommendation'>
            <h1>Mis Recomendaciones</h1>
            <p>Estas son las recomendaciones de películas que hemos seleccionado para ti.</p>
            {(series.length <= 0) && (
                <h2 className="movie-board-title">No Posees Recomendaciones</h2>
            )
            }
            <div className="movie-board">
                {series.map((serie, index) => (
                    <Series  serie={serie}/>
                ))}
            </div>
        </div>

    );
};

export default MyRecomendations;