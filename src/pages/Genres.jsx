import React, { useEffect, useState } from "react";
import GenreMovieCard from "../components/GenreMovieCard";
import { useParams } from "react-router-dom";
import {
  fetchMoviesWithGenres,
  fetchMovieGenres,
} from "../services/apiService";
import LoaderComponent from "../components/LoaderComponent";
const Genres = () => {
  const [moviesWithGenres, setMoviesWithGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [genreName, setGenreName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { genreId } = useParams();

  const fetchInitialData = async () => {
    try {
      setIsLoading(true);
      const fetchedData = await fetchMoviesWithGenres(genreId, currentPage);
      setMoviesWithGenres(fetchedData);
    } catch (error) {
      console.error("Error fetching data from genres.jsx", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    const getMovieGenres = async () => {
      const fetchedData = await fetchMovieGenres();
      const currentGenre = fetchedData.find(
        (genre) => genre.id === parseInt(genreId)
      );
      if (currentGenre) {
        setGenreName(currentGenre.name);
      }
    };

    fetchInitialData();
    getMovieGenres();
  }, [genreId]);

  const handleLoadMore = async () => {
    try {
      const fetchedData = await fetchMoviesWithGenres(genreId, currentPage + 1);
      setMoviesWithGenres((prevMovies) => [...prevMovies, ...fetchedData]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching more data from genres.jsx", error);
    }
  };

  return (
    <main className="mt-[100px]">
      <section>
        <div className="text-white px-5 md:px-10 text-center sm:text-start">
          <h5 className=" text-[20px] sm:text-[23px] font-medium tracking-wider">
            {genreName} Movies
          </h5>
          <p className="mt-[5px] text-[14px] sm:text-[15px] tracking-wide text-gray-400">
            Note: All movie data displayed is sourced from TMDB
          </p>
        </div>

        {isLoading ? (
          <LoaderComponent />
        ) : (
          <div className="px-5 md:px-10 mt-[50px] flex flex-wrap justify-around gap-5">
            {moviesWithGenres.map((movie, index) => (
              <div key={movie.id}>
                <GenreMovieCard
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  releaseYear={movie.release_date?.slice(0, 4)}
                  rating={movie.vote_average}
                  count={index + 1}
                />
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <button
            className=" w-[280px] text-[15px] font-medium text-white py-2 px-5 rounded-[5px] tracking-wide mt-[50px] bg-secondary hover:bg-primary"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      </section>
    </main>
  );
};

export default Genres;
