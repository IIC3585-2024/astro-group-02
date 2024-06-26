import React, { useEffect, useState } from 'react';
import './SerieBox.css';
// import movieImage from './movie-display.jpg';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import cong from "../../firebase/configuration";

const SerieBox =  () => {
    const [serie, setSerie] = useState({});

    const getSeries = async () => {
        const db = getFirestore(cong);
        const snapshot = await getDocs(collection(db, "visualmaniaDB"));
        let series = snapshot.docs.map(doc => doc.data());
        series = calculateStars(series);
        const id = window.location.search.split('=')[1];
        setSerie(series[id]);
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
        getSeries();
    }, []);

    return (
        <div className="series-info">
            <h2>{serie.name}</h2>
            <p><strong>Servicio:</strong> {serie.service}</p>
            <p><strong>Temporadas:</strong> {serie.seasons}</p>
            <p><strong>Episodios por Temporada:</strong> {serie.episodes}</p>
            <p><strong>Descripción:</strong> {serie.description}</p>
            <p><strong>Categoría:</strong> {serie.category}</p>
            <p><strong>Promedio de Estrellas:</strong> {serie.promedioEstrellas? serie.promedioEstrellas.toFixed(1): ''}</p>
            <p><strong>Número de Calificaciones:</strong> {serie.numCalificaciones}</p>
        </div>
    );
};

export default SerieBox;