import React from 'react'
import styles from './SingleMovieComponents.module.css'
import { useParams } from 'react-router-dom'
const SingleMovieComponents = () => {
    const {movie_url}=useParams();
  return (
    <div>SingleMovieComponents{movie_url}</div>
  )
}

export default SingleMovieComponents
