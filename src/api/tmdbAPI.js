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

export const getMovieById = async id => {
  try {
    const { data } = await tmdbApi.get(`/movie/${id}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};
