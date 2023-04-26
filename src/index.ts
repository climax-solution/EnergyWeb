import { Genre, Movie } from "./index.types"
const data = require("./db.json");
const movies: Movie[] = data.movies;

export const getFilteredMovies = ({ genres }: { genres: Genre[] }): Movie[] => {
  if (genres.length === 0) {
    return [movies[Math.floor(Math.random() * movies.length)]];
  }

  const filteredMovies: Movie[] = movies.filter((movie) => {
    const movieGenres = movie.genres.filter((genre) => genres.includes(genre as Genre));
    return movieGenres.length === movie.genres.length && movieGenres.length > 0;
  });

  filteredMovies.sort((a, b) => {
    const aGenreCount = a.genres.length;
    const bGenreCount = b.genres.length;

    if (aGenreCount === bGenreCount) {
      return a.id - b.id;
    }
    return bGenreCount - aGenreCount;
  });

  return filteredMovies;
};