import { useState } from 'react';
import { getMovies } from '../utils/movieService';
import Movie from './Movie';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleClick = async () => {
    const movies = await getMovies();
    setMovies(movies);
    movies.map(movie => Movie)
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Show movies
      </button>
      <br/>
      {movies.map(mov => <Movie title={mov.title} actor={mov.actor} />)}
    </>
  );
};

export default Movies;