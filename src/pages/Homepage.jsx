import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/tmdbAPI';
import { Section } from 'components/Section/Section';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const asyncWrapper = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, []);

  return (
    <Section title="Tranding movies">
      {isLoading && <div>ЗАГРУЗКА</div>}
      <MoviesList movies={movies} />
    </Section>
  );
};
