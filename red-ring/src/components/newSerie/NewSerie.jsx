import React, { useState, useEffect } from 'react';
import './NewSerie.css';


import cong from "../../firebase/configuration"; // Assuming the correct path to your configuration file
import { getDatabase, ref, onValue } from "firebase/database";
import { getFirestore, collection, getDocs, doc, addDoc } from "firebase/firestore";

const NewSerie = () => {
    const [name, setName] = useState('');
    const [service, setService] = useState('Netflix');
    const [seasons, setSeasons] = useState('');
    const [episodes, setEpisodes] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Action');
    const db = getFirestore(cong);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const movieData = {
            name,
            service,
            seasons,
            episodes,
            description,
            category,
            reviews: [],
        };
        const docRef = collection(db, "visualmaniaDB")
        await addDoc(docRef, movieData);
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
                <label htmlFor="episodes">Número de Capítulos de cada temporada(separadas por un guion)(5-2-8)</label>
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

            <button type="submit">Crear Serie</button>
        </form>
    );
};

export default NewSerie;
