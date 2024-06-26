// src/components/MovieRecommendation.js

import React, { useEffect, useState } from 'react';
import './myRecomendations.css';
import './MovieRecommendation.css';
import Series from '../serie/Series';
import Filter from '../filters/Filter';
import Header from '../header/Header';
import { set } from 'firebase/database';
import { getFirestore, collection, getDocs, doc, addDoc } from "firebase/firestore";
import cong from "../../firebase/configuration";


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

    const getSeries = async () => {
        const db = getFirestore(cong);
        const snapshot = await getDocs(collection(db, "visualmaniaDB"));
        let series = snapshot.docs.map(doc => doc.data());
        series = calculateStars(series);
        setSeries(series);
        setSeriesFiltered(series);
    };

    const calculateStars = (series) => {
        let id = 0;
        series.forEach(serie => {
            serie.id = id++;
            let totalStars = 0;
            serie.reviews.forEach(review => {
                totalStars += review.rating;
            });
            serie.promedioEstrellas = totalStars / serie.reviews.length || 0;
            serie.numCalificaciones = serie.reviews.length;
        });
        return series;
    }



    useEffect(() => {
        // const seriesData = [
        //     {
        //         id: 1,
        //         nombre: 'Yerko Series',
        //         servicio: 'Netflix',
        //         temporadas: 5,
        //         episodiosPorTemporada: '8-9-8-8',
        //         descripcion: 'A group of kids deals with supernatural events in their small town.',
        //         categoria: 'Drama, Fantasy, Horror',
        //         promedioEstrellas: 8.7,
        //         numCalificaciones: 250
        //     }
        // ];
        getSeries();
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
                    <Series serie={serie} key={index}/>
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