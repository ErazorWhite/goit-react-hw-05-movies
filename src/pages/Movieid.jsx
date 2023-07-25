import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovieById } from 'api/tmdbAPI';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Section } from 'components/Section/Section';
const Movieid = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);

    const asyncWrapper = async () => {
      try {
        const movieDetails = await getMovieById(id);
        setMovieDetails(movieDetails);
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
      <Link to={backLinkLocationRef.current}>← Go back</Link>
      <Section>
        {isLoading && <div>LOADING ...</div>}
        {movieDetails ? (
          <MovieDetails details={movieDetails}></MovieDetails>
        ) : (
          <div>Oops!</div>
        )}
      </Section>
    </>
  );
};

export default Movieid;
