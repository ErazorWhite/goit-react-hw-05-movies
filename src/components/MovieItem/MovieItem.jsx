import { useLocation } from 'react-router-dom';
import {
  StyledLi,
  StyledLink,
  MovieThumb,
  MovieOverview,
} from './MovieItem.styled';
import defaultPhoto from 'images/comingSoon_200x300.jpg';
import PropTypes from 'prop-types';

export const MovieItem = ({ id, name, title, overview, poster_path }) => {
  const location = useLocation();
  const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : defaultPhoto;

  return (
    <StyledLi>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <h2>{name ?? title}</h2>
        <MovieThumb>
          <img src={posterImage} alt="movie poster" width="200" height="100%" />
          <MovieOverview>{overview}</MovieOverview>
        </MovieThumb>
      </StyledLink>
    </StyledLi>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
};
