import defaultPhoto from 'images/comingSoon_200x300.jpg';
import { getMovieById } from 'api/tmdbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Ul } from './MovieCast.styled';

const MovieCredits = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieCast, setMovieCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const asyncWrapper = async () => {
      try {
        const movieCast = await getMovieById(id, 'credits');
        setMovieCast(movieCast['cast']);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [id]);

  return (
    <>
      {isLoading && <div>LOADING ...</div>}
      <Ul>
        {movieCast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : defaultPhoto
              }
              alt="profile"
              width="200"
            />
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </Ul>
    </>
  );
};

export default MovieCredits;