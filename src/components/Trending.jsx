import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchTrendingMovies } from "../services/apiService";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const fetchedData = await fetchTrendingMovies();
      setTrendingMovies(fetchedData);
    };

    getTrendingMovies();
  }, []);
  return (
    <div className="mt-[20px]">
      <h1 className="ps-5 md:ps-10 font-medium text-[20px] text-white tracking-wide">
        Trending Movies
      </h1>
      <div className="flex gap-7 px-5 md:px-10 py-[20px] overflow-auto">
        {trendingMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            releaseYear={movie.release_date?.slice(0, 4)}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
