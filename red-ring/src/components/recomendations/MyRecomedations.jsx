// src/components/MovieRecommendation.js

import React, { useEffect, useState } from 'react';
import './myRecomendations.css';
import './MovieRecommendation.css';
import Series from '../serie/Series';
import Filter from '../filters/Filter';
import Header from '../header/Header';
import { set } from 'firebase/database';

const MyRecomendations = () => {
    const [series, setSeries] = useState([]);
    const [seriesFiltered, setSeriesFiltered] = useState([]);
    const [category, setCategory] = useState('all');
    const [service, setService] = useState('all');
    const [stars, setStars] = useState(0);
    
    const filterSeries = () => {
        let filteredSeries = series;
        if (category !== 'all') {
            filteredSeries = filteredSeries.filter((serie) => serie.categoria.includes(category));
        }
        if (service !== 'all') {
            filteredSeries = filteredSeries.filter((serie) => serie.servicio === service);
        }
        if (stars > 0) {
            filteredSeries = filteredSeries.filter((serie) => serie.promedioEstrellas >= stars);
        }
        setSeriesFiltered(filteredSeries);
    }

    useEffect(() => {
        filterSeries();
    }, [category, service, stars]);

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
                id: 2,
                nombre: 'Yerko Series',
                servicio: 'Amazon Prime',
                temporadas: 5,
                episodiosPorTemporada: [8, 9, 8, 8],
                descripcion: 'A group of kids deals with supernatural events in their small town.',
                categoria: 'Drama, Fantasy, Horror',
                promedioEstrellas: 8.7,
                numCalificaciones: 250
            },
                        {
                id: 3,
                nombre: 'Yerko Series',
                servicio: 'Disney Plus',
                temporadas: 5,
                episodiosPorTemporada: [8, 9, 8, 8],
                descripcion: 'A group of kids deals with supernatural events in their small town.',
                categoria: 'Drama, Fantasy, Horror',
                promedioEstrellas: 8.7,
                numCalificaciones: 250
            },
            {
                id: 4,
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
                id: 5,
                nombre: 'Yerko Series',
                servicio: 'Netflix',
                temporadas: 5,
                episodiosPorTemporada: [8, 9, 8, 8],
                descripcion: 'A group of kids deals with supernatural events in their small town.',
                categoria: 'Drama, Fantasy, Horror',
                promedioEstrellas: 8.7,
                numCalificaciones: 250
            }, {
                id: 6,
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
        setSeriesFiltered(seriesData);
    }
        , [])

    return (
        <div className='movie-recommendation'>
            <p>Estas son las recomendaciones de películas que hemos seleccionado para ti.</p>

            <Filter 
                category={category} setCategory={setCategory}
                service={service} setService={setService}
                stars={stars} setStars={setStars}
            />
            <div className="movie-board">
                {seriesFiltered.map((serie, index) => (
                    <Series  serie={serie}/>
                ))}
            </div>
            {(seriesFiltered.length <= 0) && (
                <h2 className="movie-board-title">No Existen Recomendaciones</h2>
            )
            }
        </div>

    );
};

export default MyRecomendations;