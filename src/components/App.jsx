import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'Layout/Layout';

const Home = lazy(() => import('../pages/Homepage'));
const Movies = lazy(() => import('../pages/Moviespage'));
const Movieid = lazy(() => import('../pages/Movieid'));
const NotFoundpage = lazy(() => import('../pages/Notfoundpage'));
const MovieCredits = lazy(() => import('./MovieDetails/MovieCast/MovieCast'));
const MovieReview = lazy(() => import('./MovieDetails/MovieReview/MovieReview'));

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
