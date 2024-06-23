import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Recomendaciones Quiroz</h1>
            <div className="header-buttons">
                <a href="/add-serie">
                    <button className="header-button">Agregar<br></br>Serie</button>
                </a>
                <a href="/logout">
                    <button className="header-button">Cerrar<br></br>Sesión</button>
                </a>
            </div>
        </header>
        
    );
}

export default Header;