import React, { useEffect, useState } from "react";
import { fetchMovieInfo } from "../services/apiService";
import { Link, useParams } from "react-router-dom";
import WatchTrailerButton from "./WatchTrailerButton";
import LoaderComponent from "./LoaderComponent";
import MovieInfo from "./MovieInfo";
import SimilarMovies from "./SimilarMovies";
import MoviePosters from "./MoviePosters";

const ViewMovieInfo = ({ onOpenTrailer }) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const fetchedData = await fetchMovieInfo(movieId);
        setMovieDetails(fetchedData);
      } catch (error) {
        console.error(
          "Error fetching movie details from viewmovieinfo.jsx",
          error
        );
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    getMovieDetails();
  }, [movieId]);

  function formatRuntime(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  }

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
          <img
            src={
              movieDetails.backdrop_path
                ? `${IMG_BASE_URL}${movieDetails.backdrop_path}`
                : ""
            }
            className="h-[90vh] sm:h-screen w-full object-cover"
            loading="lazy"
          />
          <div className="absolute z-[5] top-0 left-0 end-0 h-screen bg-[rgba(0,0,0,.7)]" />

          <div className="text-white absolute z-[5] top-[55%] xl:top-[50%] left-0 md:left-[50%] md:-translate-x-[50%] -translate-y-[50%] px-5">
            <div className="flex flex-row gap-5 mdl:gap-10">
              <div className="hidden md:block min-w-[250px] mdl:min-w-[350px] w-[250px]  mdl:w-[350px] h-[400px] mdl:h-[500px]">
                <img
                  src={
                    movieDetails.poster_path
                      ? `${IMG_BASE_URL}${movieDetails.poster_path}`
                      : ""
                  }
                  alt={movieDetails.title}
                  className="w-full h-full rounded-[10px] shadow-md"
                />
              </div>
              <div className="w-full md:w-[450px] mdl:w-[500px] lg:w-[700px]">
                <h1 className="text-[25px] mdl:text-[35px] xl:text-[45px] font-semibold">
                  {movieDetails.title}
                </h1>
                <p className="text-[13px] xs:text-[15px] mdl:text-[18px]">
                  {movieDetails.release_date
                    ? movieDetails.release_date.slice(0, 4)
                    : "N/A"}{" "}
                  | {formatRuntime(movieDetails.runtime)}
                </p>
                <div className="flex flex-wrap flex-row gap-2 mt-[15px]">
                  {movieDetails.genres
                    ? movieDetails.genres.map((genre) => (
                        <Link key={genre.id} to={`/genres/${genre.id}`}>
                          <button className="px-5 py-1 border-[2px] font-medium border-white rounded-[5px] text-[13px] xs:text-[15px] hover:border-accent hover:text-accent hover:scale-105 transition-all">
                            {genre.name}
                          </button>
                        </Link>
                      ))
                    : "N/A"}{" "}
                </div>
                <p className="my-[15px] text-[12px] sm:text-[15px] tracking-wide">
                  {movieDetails.overview}
                </p>

                <div>
                  <WatchTrailerButton
                    onOpenTrailer={onOpenTrailer}
                    movieId={movieDetails.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="hidden sm:block relative z-[10] w-full h-[5px] bg-background shadow-myShadow"></div>

      <MovieInfo
        status={movieDetails.status}
        date={movieDetails.release_date}
        language={movieDetails.original_language}
        budget={movieDetails.budget}
        revenue={movieDetails.revenue}
        popularity={movieDetails.popularity}
        rating={movieDetails.vote_average}
      />

      <MoviePosters id={movieId} />

      <SimilarMovies id={movieId} />
    </>
  );
};

export default ViewMovieInfo;
