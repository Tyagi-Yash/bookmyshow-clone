import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieCard = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=9274f6fc&s=${searchQuery}`)
      .then(response => setMovies(response.data.Search))
      .catch(error => console.error('Error fetching data:', error));
  }, [searchQuery]);

  return (
    <div className="movie-container">
      {movies?.map(movie => (
        <div key={movie.imdbID} className="movie-card">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
