import React, { useState } from 'react';
import './NewSerie.css';

const NewSerie = () => {
    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [seasons, setSeasons] = useState('');
    const [episodes, setEpisodes] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [stars, setStars] = useState('');
    const [ratingsCount, setRatingsCount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const movieData = {
            name,
            service,
            seasons,
            episodes,
            description,
            category,
            stars,
            ratingsCount,
        };
        console.log(movieData);
    };

    return (
        <form className="serie-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="service">Servicio de Streaming</label>
                <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                >
                    <option value="Netflix">Netflix</option>
                    <option value="Amazon Prime">Amazon Prime</option>
                    <option value="Disney Plus">Disney Plus</option>
                    <option value="HBO Max">HBO Max</option>
                </select>
            </div>
            <div>
                <label htmlFor="seasons">Número de Temporadas</label>
                <input
                    type="number"
                    id="seasons"
                    min={1}
                    value={seasons}
                    onChange={(e) => setSeasons(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="episodes">Número de Capítulos de cada temporada(separadas por un guion)</label>
                <input
                    type="text"
                    id="episodes"
                    value={episodes}
                    onChange={(e) => setEpisodes(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Breve descripción</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Action">Acción</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Terror</option>
                    <option value="Comedy">Comedia</option>
                    <option value="Fantasy">Fantasía</option>
                    <option value="Documentary">Documental</option>
                </select>
            </div>
            <div>
                <label htmlFor="stars">Estrellas</label>
                <input
                    type="number"
                    id="stars"
                    min="1"
                    max="10"
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="ratingsCount">Cuantas calificaciones hay</label>
                <input
                    type="number"
                    id="ratingsCount"
                    min={0}
                    value={ratingsCount}
                    onChange={(e) => setRatingsCount(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default NewSerie;
