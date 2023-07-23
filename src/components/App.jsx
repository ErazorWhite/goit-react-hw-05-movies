import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Homepage';
import { Movies } from 'pages/Moviespage';
import { Movieid } from 'pages/Movieid';
import { NotFoundpage } from 'pages/Notfoundpage';
import { Layout } from 'Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movieid />} />
          <Route path="movies/:id/cast" element={<div>123</div>} />
          <Route path="*" element={<NotFoundpage />} />
        </Route>
      </Routes>
    </>
  );
};
