import { useState } from 'react';
import { getTitle, getActor } from '../utils/movieService';
import Movie from './Movie.js';

const Movies = () => {
  const [actor, setActors] = useState([]);
  const [title, setTitles] = useState([]);

  const handleClick = async () => {
    const actors = await getActor();
    setActors(actors);
    const titles = await getTitle();
    setTitles(titles);
    // <Movie title={titles} actor={actors} />;
  };

  return (
    <>
      <Movie title={title} actor={actor} />;
      {/* {actors?.length > 0 ? <p>{JSON.stringify(actors)}</p> : null}
      {titles?.length > 0 ? <p>{JSON.stringify(titles)}</p> : null} */}
      <button type="button" onClick={handleClick}>
        Show movies
      </button>
    </>
  );
};

export default Movies;

// title={title} actor={actor}
