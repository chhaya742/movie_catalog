// src/pages/moviePage/MoviesPage.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import MoviesChild from '../../components/ChildComponets/MoviesChild';
import styles from './MoviesPage.module.css';

const MoviesPage = ({ movieData }) => {
  const [searchResults, setSearchResults] = useState(movieData);
  const [startIndex, setStartIndex] = useState(0);
  const moviesPerPage = 10;

  const handleSearch = (query) => {
    if (query === '') {
      setSearchResults(movieData);
    } else {
      const results = movieData.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
    setStartIndex(0);
  };

  const handleNext = () => {
    setStartIndex(prevIndex => prevIndex + moviesPerPage);
  };

  const handlePrevious = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - moviesPerPage, 0));
  };

  const currentPage = Math.floor(startIndex / moviesPerPage) + 1;
  const pageCount = Math.ceil(searchResults.length / moviesPerPage);

  return (
    <>
      <div className={styles.moviesParent}>
        {searchResults.slice(startIndex, startIndex + moviesPerPage).map((data) => (
          <MoviesChild key={data.movie_url} {...data} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          className={styles.paginationArrow}
          onClick={handlePrevious}
          disabled={startIndex === 0}
        >
          <ChevronLeft />
        </button>
        <div className={styles.pageCount}>{currentPage} / {pageCount}</div>
        <button
          className={styles.paginationArrow}
          onClick={handleNext}
          disabled={startIndex + moviesPerPage >= searchResults.length}
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default MoviesPage;
