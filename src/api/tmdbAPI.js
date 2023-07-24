import axios from 'axios';

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    accept: 'application/json',
    api_key: '7d03cd083636c96c19a8b4b0ecb1404e',
  },
});

export const getTrendingMovies = async () => {
  try {
    const { data } = await tmdbApi.get('/trending/all/day');
    return data['results'];
  } catch (e) {
    console.log(e);
  }
};

export const getMoviesBySearchQuery = async (searchQuery) => {
  try {
    const { data } = await tmdbApi.get('/search/movie', {params: { query: searchQuery }});
    return data['results'];
  } catch (e) {
    console.log(e);
  }
};

export const getMovieById = async (id, extra) => {
  try {
    const query = extra ? `/movie/${id}/${extra}` : `/movie/${id}`;
    const { data } = await tmdbApi.get(query);
    return data;
  } catch (e) {
    console.log(e);
  }
};