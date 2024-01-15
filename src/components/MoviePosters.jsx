import React, { useEffect, useState } from "react";
import { fetchMoviePosters } from "../services/apiService";

const MoviePosters = ({ id }) => {
  const [moviePosters, setMoviePosters] = useState([]);
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const getMoviePosters = async () => {
      const fetchedData = await fetchMoviePosters(id);
      setMoviePosters(fetchedData);
      console.log(fetchedData);
    };

    getMoviePosters();
  }, [id]);

  return (
    <div className="mt-[50px] relative z-[11]">
      <h1 className="ps-5 md:ps-10 font-medium text-[20px] text-white tracking-wide">
        Movie Posters
      </h1>
      <div className="flex gap-7 px-5 md:px-10 py-[20px] overflow-auto  overflow-y-hidden ">
        {moviePosters.map((poster) => (
          <div className="flex-shrink-0 text-white">
            <div className="w-[175px]">
              {poster.file_path ? (
                <img
                  src={`${IMG_BASE_URL}${poster.file_path}`}
                  className="w-full h-[250px] rounded-[10px] hover:rotate-6 hover:scale-110 transition-all"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-[250px] bg-secondary flex items-center justify-center rounded-[10px]  hover:rotate-6 hover:scale-110 transition-all">
                  <p className="text-white font-medium text-[20px]">N/A</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePosters;
