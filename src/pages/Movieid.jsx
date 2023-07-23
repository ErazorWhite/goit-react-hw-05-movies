import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'api/tmdbAPI';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Section } from 'components/Section/Section';
export const Movieid = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const asyncWrapper = async () => {
      try {
        const movieDetails = await getMovieById(id);
        setMovieDetails(movieDetails);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [id]);

  return (
    <>
      <button type="button">← Go back</button>
      <Section>
        {isLoading && <div>ЗАГРУЗКА</div>}
        <MovieDetails details={movieDetails}></MovieDetails>
      </Section>
    </>
  );
};
