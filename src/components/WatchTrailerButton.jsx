import React from "react";
import { FaPlay } from "react-icons/fa";

const WatchTrailerButton = ({ onOpenTrailer, movieId }) => {
  return (
    <>
      <button
        className="flex items-center gap-2 bg-accent py-2 px-5 rounded-lg text-[14px] sm:text-[15px] font-medium hover:bg-hoveredAccent duration-100 shadow-sm shadow-accent"
        onClick={() => onOpenTrailer(movieId)}
      >
        <FaPlay />
        Watch Trailer
      </button>
    </>
  );
};

export default WatchTrailerButton;
