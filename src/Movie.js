import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, title, summary, poster, year, genres, runtime, language}) {
    return (
            <div className="movie">
                <img className="movie_img" src={poster} alt={title} title={title} /> 
                    <div className="movie_data">
                        <h3 className="movie_title">{title}</h3>
                        <h5 className="movie_year">year : {year}</h5>
                        <ul className="movie_genres">genre : {genres.map((genre, index) => {
                        return(
                            <li className="movie_genre_li" key={index}>
                                {genre}
                            </li>
                        )
                        })}
                        </ul>  
                        <h5 className="movie_runtime">runtime : {runtime} min</h5>
                        <h5 className="movie_language">lang : {language}</h5>
                    </div>
            </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
}

export default Movie;