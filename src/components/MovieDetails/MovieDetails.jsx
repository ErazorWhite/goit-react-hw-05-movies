import defaultPhoto from 'images/comingSoon_200x300.jpg';
import { Link, Outlet } from 'react-router-dom';
import {
  MovieContainter,
  MovieDetailsList,
  H2,
  Text,
} from './MovieDetails.styled';

export const MovieDetails = ({
  details: { title, release_date, poster_path, vote_average, overview, genres },
}) => {
  const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : defaultPhoto;

  const releaseDateNormalized = release_date
    ? `(${new Date(release_date).getFullYear()})`
    : '';

  const sectionTitle = title + ' ' + releaseDateNormalized;

  const genresList = genres ? genres.map(genre => genre.name).join(', ') : '';
  return (
    <>
      <MovieContainter>
        <img src={posterImage} alt="Movie poster" width="200px" />
        <div>
          <h1>{sectionTitle}</h1>
          <Text>User Score: {vote_average}</Text>
          <MovieDetailsList>
            <li>
              <H2>Overview</H2>
              <Text>{overview}</Text>
            </li>
            <li>
              <H2>Genres</H2>
              <Text>{genresList}</Text>
            </li>
          </MovieDetailsList>
        </div>
      </MovieContainter>
      <div>
        <p>Additional information:</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
