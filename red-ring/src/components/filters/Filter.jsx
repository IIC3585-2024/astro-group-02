import React from "react";
import './Filter.css';


const Filter = ({ category, setCategory, service, setService, stars, setStars }) => {
    return (
        <div className="movie-filter">
            <label htmlFor="filter">Filtrar por Servicio</label>
            <select name="filter" id="filter" value={service} onChange={(e) => setService(e.target.value)}>
                <option value="all">Todos</option>
                <option value="Netflix">Netflix</option>
                <option value="Amazon Prime">Amazon Prime</option>
                <option value="Disney Plus">Disney Plus</option>
                <option value="HBO Max">HBO Max</option>
            </select>
            <label htmlFor="filter">Filtrar por Categoria</label>
            <select name="filter" id="filter" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="all">Todos</option>
                <option value="Drama">Drama</option>
                <option value="Fantasy">Fantasia</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedia</option>
                <option value="Action">Accion</option>
                <option value="Documentary">Documental</option>
            </select>
            <label htmlFor="filter">Filtrar por minimo de estrellas</label>
            <select name="filter" id="filter" value={stars} onChange={(e) => setStars(e.target.value)}>
                <option value="0">Todos</option>
                <option value="1">1 estrella</option>
                <option value="2">2 estrellas</option>
                <option value="3">3 estrellas</option>
                <option value="4">4 estrellas</option>
                <option value="5">5 estrellas</option>
                <option value="6">6 estrellas</option>
                <option value="7">7 estrellas</option>
                <option value="8">8 estrellas</option>
                <option value="9">9 estrellas</option>
                <option value="10">10 estrellas</option>
            </select>
        </div>
    );
}

export default Filter;