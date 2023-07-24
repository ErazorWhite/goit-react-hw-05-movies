import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Homepage';
import Movies from 'pages/Moviespage';
import Movieid from 'pages/Movieid';
import NotFoundpage from 'pages/Notfoundpage';
import { Layout } from 'Layout/Layout';
import { MovieCredits } from './MovieDetails/MovieCast/MovieCast';
import { MovieReview } from './MovieDetails/MovieReview/MovieReview';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movieid />}>
            <Route path="cast" element={<MovieCredits />} />
            <Route path="review" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<NotFoundpage />} />
        </Route>
      </Routes>
    </>
  );
};
