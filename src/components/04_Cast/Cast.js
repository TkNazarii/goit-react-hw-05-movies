import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from '../../api/getMovies';
import css from './Cast.module.scss';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

  return (
    <div className={css.Cast}>
      <h2>Cast</h2>
      {cast.length === 0 ? (
        <p>No cast available.</p>
      ) : (
        <ul>
          {cast.map(item => (
            <li key={item.cast_id}>
              <h3>{item.name}</h3>

              {item.profile_path ? (
                <img
                  src={`${BASE_IMAGE_URL}${item.profile_path}`}
                  alt="Cast Member"
                />
              ) : (
                'not img'
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
