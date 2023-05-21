import { useParams, Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { fetchDetails } from '../../api/getMovies';

import css from './MovieDetails.module.scss';

const MovieDetails = () => {
  const [dataDetails, setDataDetails] = useState(null);
  const { movieId } = useParams();

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

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className={css['MovieDetails']}>
      <button onClick={goBack}>Back</button>

      <p>{dataDetails.title}</p>
      <img src={fullImageUrl} alt="Movie Poster" />

      <div className={css['MovieDetails__list']}>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
