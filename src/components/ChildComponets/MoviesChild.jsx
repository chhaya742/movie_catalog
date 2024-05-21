import React from 'react';
import styles from './MovieChild.module.css';

const MoviesChild = ({ title, poster, release_year, imdb_rating, plot }) => {
  return (
    <div className={styles.movieCard}>
      <img src={poster} alt={title} className={styles.poster} />
      <div className={styles.details}>
        <h2>{title}</h2>
        <p><strong>Year:</strong> {release_year}</p>
        <p><strong>Rating:</strong> {imdb_rating}</p>
        <p><strong>Plot:</strong> {plot}</p>
      </div>
    </div>
  );
};

export default MoviesChild;
