import { getMoviesBySearchQuery } from 'api/tmdbAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Section } from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    setIsLoading(true);
    const asyncWrapper = async searchQuery => {
      try {
        const searchMoviesResult = await getMoviesBySearchQuery(searchQuery);
        setMovies(searchMoviesResult);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper(search);
  }, [search]);

  return (
    <Section>
      {isLoading && <div>LOADING ...</div>}
      <SearchForm />
      <MoviesList movies={movies} />
    </Section>
  );
};

export default Movies;
