function Movie(titles, actors) {
  return (
    <>
      {titles.map((movie) => (
        <Movie title={titles} actor={actors} />
      ))}
    </>
  );
}

export default Movie;
