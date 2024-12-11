import './MovieCard.css'

interface Movie {

    url?: string,
    title?: string,
    release_date?: string,
    id?: number
};


function MovieCard(movie: Movie) {


    function onFavorite() {
        alert("clicked")
    }

    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={movie.url} alt={movie.title} />
                <div className='movie-overlay'>
                    <button className='favorite-btn' onClick={onFavorite}>
                        ♥
                    </button>
                </div>
            </div>
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.release_date} </p>
            </div>
        </div>
    )
}

export default MovieCard;
