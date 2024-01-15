import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const GenreMovieCard = ({ poster, title, releaseYear, rating, count, id }) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

  const imageUrl = poster ? `${IMG_BASE_URL}${poster}` : null;
  return (
    <>
      <div className="flex-shrink-0 text-white relative">
        <div className="absolute -top-3 -end-3 bg-blackglass rotate-6 w-[35px] h-[35px] grid place-items-center rounded-[5px] border-2 border-accent font-semibold z-[1]">
          {count}
        </div>
        <div className="w-[130px] xxs:w-[150px] sm:w-[175px] md:w-[210px]">
          <Link to={`/movie/${id}`}>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-[190px] xxs:h-[250px] sm:h-[270px] md:h-[300px] rounded-[10px] hover:rotate-6 hover:scale-110 transition-all"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-[300px] bg-secondary flex items-center justify-center rounded-[10px]  hover:rotate-6 hover:scale-110 transition-all">
                <p className="text-white font-medium text-[20px]">N/A</p>
              </div>
            )}
          </Link>
          <div className="px-[3px] mt-[8px] text-[13px]">
            <p className="truncate">{title}</p>
            <p className="mt-[2px] flex justify-between">
              {releaseYear}{" "}
              <span className="flex items-center gap-2">
                <FaStar className="text-[15px] text-yellow-500" />
                {rating}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenreMovieCard;
