import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchTheatreMovies } from "../services/apiService";

const Theathers = () => {
  const [theatreMovies, setTheatreMovies] = useState([]);

  useEffect(() => {
    const getTheatreMovies = async () => {
      const fetchedData = await fetchTheatreMovies();
      setTheatreMovies(fetchedData);
    };

    getTheatreMovies();
  }, []);
  return (
    <div className="mt-[20px]">
      <h1 className="ps-5 md:ps-10 font-medium text-[20px] text-white tracking-wide">
        Movies in Theatres
      </h1>
      <div className="flex gap-7 px-5 md:px-10 py-[20px] overflow-auto">
        {theatreMovies.map((movie) => (
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

export default Theathers;
