import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "./config";

function Movie() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${config.TMDB_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        const movies = res.data.results;
        setMovieList(movies);
      });
  }, []);

  return (
    <div>
      <h1> Most popular Movies </h1>
      <ul>
  
        {movieList.map((movie) => (
          <li key={movie.id}> {movie.title} </li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
