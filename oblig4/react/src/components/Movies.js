const Movies = () => {
  // const [state, setState] = useState('');

  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <>
      <button type="submit">
        <a onClick={handleClick} href="https://i.imgur.com/Su3zpIV.png">
          Button
        </a>
      </button>
    </>
  );
};

export default Movies;
