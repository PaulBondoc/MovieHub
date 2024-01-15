import React from "react";
import { FaStar } from "react-icons/fa";

const PeoplePoster = ({ poster, title, releaseYear, rating, id }) => {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

  const imageUrl = poster ? `${IMG_BASE_URL}${poster}` : null;
  return (
    <>
      <div className="flex-shrink-0 text-white">
        <div className="w-[175px]">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-[250px] rounded-[10px] hover:rotate-6 hover:scale-110 transition-all"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-[250px] bg-secondary flex items-center justify-center rounded-[10px]  hover:rotate-6 hover:scale-110 transition-all">
              <p className="text-white font-medium text-[20px]">N/A</p>
            </div>
          )}

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

export default PeoplePoster;
