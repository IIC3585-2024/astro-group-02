import './SerieBox.css';

const SerieBox = ({ serie }) => {
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