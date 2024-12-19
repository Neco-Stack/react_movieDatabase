import React from "react";
import { useParams } from "react-router-dom";
import movies from "../../data/movies";
import "./MovieDetails.css";

const MovieDetails: React.FC = () => {
    const { id } = useParams< { id: string }>(); 
    const movie = movies.find(m => m.title === decodeURIComponent(id || ""));

    if (!movie) {
        return <div>Movie not found</div>;
    }
    return (
        <div className="movie-details">
            <h2>{movie.title}</h2>
            <p>Year: {movie.year}</p>
            <p>Director: {movie.director}</p>
            <p>Duration: {movie.duration}</p>
            <p>Genre: {movie.genre.join(", ")}</p>
            <p>Rating: {movie.rate}</p>
        </div>
      );
}
 
export default MovieDetails;