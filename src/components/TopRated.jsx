import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchTopRatedMovies } from "../services/apiService";
const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const fetchedData = await fetchTopRatedMovies();

      setTopRatedMovies(fetchedData);
    };

    getTopRatedMovies();
  }, []);
  return (
    <div className="mt-[20px]">
      <h1 className="ps-5 md:ps-10 font-medium text-[20px] text-white tracking-wide">
        Top Rated Movies
      </h1>
      <div className="flex gap-7 px-5 md:px-10 py-[20px] overflow-auto">
        {topRatedMovies.map((movie) => (
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

export default TopRated;
