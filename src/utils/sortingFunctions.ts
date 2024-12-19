import { Movie } from "../types/Movie";

export const sortAlphabetically = (movies: Movie[], ascending: boolean): Movie[] => {
    return [...movies].sort((a, b) => ascending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
};

export const sortByYear = (movies: Movie[], newest: boolean): Movie[] => {
    return [...movies].sort((a, b) => newest ? parseInt(b.year) - parseInt(a.year) : parseInt(a.year) - parseInt(b.year));
};

export const sortByRating = (movies: Movie[]): Movie[] => {
    return [...movies].sort((a, b) => parseFloat(b.rate) - parseFloat(a.rate));
};