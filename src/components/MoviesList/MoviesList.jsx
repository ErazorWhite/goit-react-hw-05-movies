import PropTypes from 'prop-types';
import { MovieItem } from '../MovieItem/MovieItem';
import { StyledUl } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <StyledUl>
      {movies && movies.map(movie => <MovieItem key={movie.id} {...movie} />)}
    </StyledUl>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
