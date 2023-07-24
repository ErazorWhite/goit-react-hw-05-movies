import { getMovieById } from 'api/tmdbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Ul, Li, H2 } from './MovieReview.styled';

export const MovieReview = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const asyncWrapper = async () => {
      try {
        const movieCast = await getMovieById(id, 'reviews');
        setMovieReviews(movieCast['results']);
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
      {isLoading && <div>LOADING ...</div>}
      {movieReviews.length ? (
        <Ul>
          {movieReviews.map(({ id, author, content }) => (
            <Li key={id}>
              <H2>Author: {author}</H2>
              <p>{content}</p>
            </Li>
          ))}
        </Ul>
      ) : (
        <div>Oops, there are no reviews.</div>
      )}
    </>
  );
};
