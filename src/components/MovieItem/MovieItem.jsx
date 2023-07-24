import {
  StyledLi,
  StyledLink,
  MovieThumb,
  MovieOverview,
} from './MovieItem.styled';
import defaultPhoto from 'images/comingSoon_200x300.jpg';

export const MovieItem = ({ id, name, title, overview, poster_path }) => {
  const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
    : defaultPhoto;

  return (
    <StyledLi>  
      <StyledLink to={`/movies/${id}`}>
        <h2>{name ?? title}</h2>
        <MovieThumb>
          <img src={posterImage} alt="movie poster" width="200" height="100%" />
          <MovieOverview>{overview}</MovieOverview>
        </MovieThumb>
      </StyledLink>
    </StyledLi>
  );
};
