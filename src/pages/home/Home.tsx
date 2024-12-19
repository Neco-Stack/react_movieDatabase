import React from "react";
import "./Home.css";
import MovieList from "../../components/movieList/MovieList";
import movies from "../../data/movies";

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to Movie Database</h1>
            <MovieList movies={movies} />
        </div>
    );
}
 
export default Home;
