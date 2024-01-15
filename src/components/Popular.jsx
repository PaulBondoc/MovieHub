import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchPopularMovies } from "../services/apiService";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const fetchedData = await fetchPopularMovies();
      setPopularMovies(fetchedData);
    };

    getPopularMovies();
  }, []);

  return (
    <div>
      <h1 className="ps-5 md:ps-10 font-medium text-[20px] text-white tracking-wide">
        What's Popular?
      </h1>
      <div className="flex gap-7 px-5 md:px-10 py-[20px] overflow-auto">
        {popularMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            releaseYear={movie.release_date.slice(0, 4)}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
