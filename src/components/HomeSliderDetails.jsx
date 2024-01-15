import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/apiService";
import { FaUsers, FaStar, FaExclamationCircle } from "react-icons/fa";
import WatchTrailerButton from "./WatchTrailerButton";
import ViewInfoButton from "./ViewInfoButton";

const HomeSliderDetails = ({ id, onOpenTrailer }) => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      const fetchedData = await fetchMovieDetails(id);
      setMovieDetails(fetchedData);
    };

    getMovieDetails();
  }, []);

  function formatRuntime(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  }

  const details = [
    { value: movieDetails.status, Icon: FaExclamationCircle },
    { value: movieDetails.popularity, Icon: FaUsers },
    { value: movieDetails.vote_average, Icon: FaStar },
  ];

  return (
    <>
      <h1 className="text-[28px] sm:text-[40px] font-semibold tracking-wide">
        {movieDetails.title}
      </h1>
      <p className="text-[13px] xs:text-[15px]">
        {movieDetails.release_date
          ? movieDetails.release_date.slice(0, 4)
          : "N/A"}{" "}
        |{" "}
        {movieDetails.genres
          ? movieDetails.genres.map((genre) => genre.name).join(" • ")
          : "N/A"}{" "}
        | {formatRuntime(movieDetails.runtime)}
      </p>
      <p className="my-[15px] text-[12px] xs:text-[15px] tracking-wide">
        {movieDetails.overview}
      </p>
      <div className="flex items-center gap-[15px]">
        <ViewInfoButton movieId={id} />
        <WatchTrailerButton
          onOpenTrailer={onOpenTrailer}
          movieId={movieDetails.id}
        />
      </div>

      <div className="hidden mt-[15px] xs:flex flex-wrap gap-[15px] text-[14px]">
        {details.map((item, index) => (
          <p
            key={index}
            className="flex items-center gap-x-5 bg-[#595959] rounded-[5px] shadow-lg pe-5"
          >
            <item.Icon className="text-[20px] py-2 w-full h-full  px-3 bg-secondary rounded-l-[5px]" />
            {item.value}
          </p>
        ))}
      </div>
    </>
  );
};

export default HomeSliderDetails;
