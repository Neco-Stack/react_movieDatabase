import React from "react";
import { Movie } from "../../types/Movie";
import { Link } from "react-router-dom";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.title} className="movie-item">
                    <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
                        <h3>{movie.title}</h3>
                        <p>Year: {movie.year}</p>
                        <p>Rating: {movie.rate}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieList;