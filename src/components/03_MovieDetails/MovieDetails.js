import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { fetchDetails } from '../../api/getMovies';
import { HiArrowLeft } from "react-icons/hi";

import css from './MovieDetails.module.scss';

const MovieDetails = () => {
  const [dataDetails, setDataDetails] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/goit-react-hw-05-movies";

  
//   console.log(backLinkHref);
//   console.log(location.state);
  
  useEffect(() => {
	  fetchDetails(movieId)
      .then(data => {
		  setDataDetails(data);
		})
		.catch(error => {
			console.error(error);
		});
	}, [movieId]);
	

	if (!dataDetails) {
		return <div>Loading...</div>;
  }

  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200/';
  const imagePath = dataDetails.poster_path;
  const fullImageUrl = `${BASE_IMAGE_URL}${imagePath}`;

  return (
    <div className={css['MovieDetails']}>

	  <Link to={backLinkHref} >
	 	 <HiArrowLeft size="24" />
		Back
	</Link>

      <p>{dataDetails.title}</p>
      <img src={fullImageUrl} alt="Movie Poster" />

      <div className={css['MovieDetails__list']}>
        <Link to={`/movies/${movieId}/cast`} state={{ from: backLinkHref }}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews` } state={{ from: backLinkHref }}>Reviews</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
