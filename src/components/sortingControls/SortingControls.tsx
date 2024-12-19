import React from "react";
import "./SortingControls.css";
import { sortAlphabetically, sortByRating, sortByYear } from "../../utils/sortingFunctions";
import { Movie } from "../../types/Movie";
import "./SortingControls.css"

interface SortingControlsProps {
  onSort: (sortFunction: (movies: Movie[]) => Movie[]) => void;
}

const SortingControls: React.FC<SortingControlsProps> = ({ onSort }) => {
    return (
        <div className="sorting-controls">
            <button onClick={() => onSort((movies) => sortAlphabetically(movies, true))}>A-Z</button>
            <button onClick={() => onSort((movies) => sortAlphabetically(movies, false))}>Z-A</button>
            <button onClick={() => onSort((movies) => sortByYear(movies, true))}>Newest First</button>
            <button onClick={() => onSort((movies) => sortByYear(movies, false))}>Oldest First</button>
            <button onClick={() => onSort(sortByRating)}>Highest Rated</button>
        </div>
    );
};

export default SortingControls;