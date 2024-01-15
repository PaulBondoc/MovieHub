import React, { useEffect, useState } from "react";
import { fetchSimilarMovies } from "../services/apiService";
import MovieCard from "./MovieCard";

const SimilarMovies = ({ id }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const getSimilarMovies = async () => {
      const fetchedData = await fetchSimilarMovies(id);
      setSimilarMovies(fetchedData);
    };

    getSimilarMovies();
  }, [id]);
  return (
    <div className="relative z-[11] mt-[20px]">
      <h1 className="ps-5 md:ps-10 font-medium text-[20px] text-white tracking-wide">
        Similar Movies
      </h1>
      {similarMovies && similarMovies.length > 0 ? (
        <div className="flex gap-7 px-5 md:px-10 py-[20px] overflow-auto">
          {similarMovies.map((movie) => (
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
      ) : (
        <p className="text-center text-[25px] text-[#444] mt-[40px] font-semibold tracking-wide">
          There are no Similar Movies
        </p>
      )}
    </div>
  );
};

export default SimilarMovies;
