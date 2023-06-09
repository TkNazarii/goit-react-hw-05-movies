import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import css from './Movies.module.scss';
import debounce from 'debounce';
import { fetchSearch } from '../../api/getMovies';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200/';

const Movies = () => {
  const [arrFilms, setArrFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
//   console.log(location);

  const search = e => {
    setSearchParams({ name: e.target.value });
  };

  const filmsSearch = searchParams.get('name');

  useEffect(() => {
    if (filmsSearch !== null) {
      setLoading(true); // Починаємо показувати "Loading..."

      fetchSearch(filmsSearch)
        .then(data => {
          setArrFilms(data.results);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false); // Приховуємо "Loading..." після завершення запиту
        });
    }
  }, [filmsSearch]);

//   console.log(location.state);

  return (
    <div className={css['Movies']}>
      <input
        type="text"
        placeholder="search films"
        onChange={debounce(search, 1000)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : arrFilms.length === 0 ? (
        <p>No films available.</p>
      ) : (
        <ul>
          {arrFilms.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}` } state={{ from: location }}>
                <h3>{item.title}</h3>

                {item.poster_path ? (
                  <img
                    src={`${BASE_IMAGE_URL}${item.poster_path}`}
                    alt="Cast Member"
                  />
                ) : (
                  <span>Image not available</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
