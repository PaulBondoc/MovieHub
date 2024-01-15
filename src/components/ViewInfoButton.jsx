import React from "react";
import { MdNewReleases } from "react-icons/md";
import { Link } from "react-router-dom";

const ViewInfoButton = ({ movieId }) => {
  return (
    <>
      <Link to={`/movie/${movieId}`}>
        <button className="flex items-center gap-3 bg-primary py-2 px-5 rounded-lg text-[14px] sm:text-[15px] font-medium hover:bg-hoveredPrimary duration-100">
          <MdNewReleases className="text-[22px]" />
          View Info
        </button>
      </Link>
    </>
  );
};

export default ViewInfoButton;
