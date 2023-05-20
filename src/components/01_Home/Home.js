import React from 'react';
import { Link } from 'react-router-dom';
// import {useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../api/getMovies';

import css from './Home.module.scss';

const Home = () => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => {
        // console.log(data);
        setDataArray(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className={css['home']}>
		<h1>Trending</h1>
      <ul>
        {dataArray.length > 0 ? (
          dataArray.map(el => (
            <li  key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title}</Link>
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default Home;
