import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchRevievs } from '../../api/getMovies';
import css from './Reviews.module.scss';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchRevievs(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  console.log(reviews);

  return (
    <div className={css.Reviews}>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
