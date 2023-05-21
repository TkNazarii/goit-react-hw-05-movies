import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Home from './01_Home';
// import Movies from "./02_Movies";
// import MovieDetails from './03_MovieDetails';
// import Cast from './04_Cast';
// import Reviews from './05_Reviews/';

import css from './App.module.css';

const Movies = lazy(() => import('components/02_Movies'));
const MovieDetails = lazy(() => import('components/03_MovieDetails'));
const Cast = lazy(() => import('components/04_Cast'));
const Reviews = lazy(() => import('components/05_Reviews'));

export const App = () => {
  const routesName = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/movies',
      label: 'Movies',
    },
  ];

  return (
    <>
      <header className={css['app']}>
        <nav className={css['navigation']}>
          {routesName.map(el => {
            return (
              <NavLink className={css['navigation--link']} to={el.path} key={el.path}>
                {el.label}
              </NavLink>
            );
          })}
        </nav>
      </header>

      <section className={css['app']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<p>Зачекайте</p>}>
                <Movies />
              </Suspense>
            }
          />

          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<p>Зачекайте</p>}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<p>Зачекайте</p>}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<p>Зачекайте</p>}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </section>
    </>
  );
};
