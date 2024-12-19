import React, { useState } from "react";
import "./Movies.css";
import MovieList from "../../components/movieList/MovieList";
import moviesData from '../../data/movies'; 

import { Movie } from "../../types/Movie"; 
import SortingControls from "../../components/sortingControls/SortingControls";

const Movies: React.FC = () => {
    const [sortedMovies, setSortedMovies] = useState<Movie[]>(moviesData); 

    const handleSort = (sortFunction: (movies: Movie[]) => Movie[]) => {
        setSortedMovies(sortFunction([...moviesData])); 
    };

    return (
        <div className="movies-page">
            <h1>Movies</h1>
            <SortingControls onSort={handleSort} />
            <MovieList movies={sortedMovies} />
        </div>
    );
};
 
export default Movies;