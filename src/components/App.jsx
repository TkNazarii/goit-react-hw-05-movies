import {Routes, Route, NavLink, Navigate } from "react-router-dom";

import Home from "./01_Home";
import Movies from "./02_Movies";
import MovieDetails from "./03_MovieDetails";
import Cast from "./04_Cast";
import Reviews from "./05_Reviews/";

import css from './App.module.css';

export const App = () => {
	
	const routesName = [
		{
			path: '/',
			label: 'Home',
		},
		{
			path: '/movies',
			label: 'Movies',
		}
	]
	
	return (
		<>
		<header className={css['app']}>
			<nav>
			{routesName.map((el) => {
					return <NavLink to={el.path} key={el.path}>{el.label}</NavLink>
				})}
			</nav>
		</header>

		<section className={css['app']}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/movies/:movieId" element={ <MovieDetails />}>
					<Route path="cast" element={<Cast />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
				<Route path="*" element={<Navigate to='/'/>} />
			</Routes>
		</section>

    </>
  );
};
