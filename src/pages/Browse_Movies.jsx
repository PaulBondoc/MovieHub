import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSearchedMovies } from "../services/apiService";
import LoaderComponent from "../components/LoaderComponent";
import GenreMovieCard from "../components/GenreMovieCard";

const Browse_Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q");

  useEffect(() => {
    const getSearchedMovies = async () => {
      try {
        setIsLoading(true);
        const fetchedData = await fetchSearchedMovies(query, 1);
        setSearchMovies(fetchedData);
      } catch (error) {
        console.error("Error fetching data from browse_movies.jsx", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
          setCurrentPage(1);
        }, 500);
      }
    };

    getSearchedMovies();
  }, [query]);

  const handleLoadMore = async () => {
    try {
      const fetchedData = await fetchSearchedMovies(query, currentPage + 1);

      setSearchMovies((prevMovies) => [...prevMovies, ...fetchedData]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(
        "Error fetching loadmore data from browse_movies.jsx",
        error
      );
    }
  };
  return (
    <main className="mt-[100px]">
      <section>
        <div className="text-white px-5 md:px-10 text-center sm:text-start">
          <h6 className="text-[20px] font-medium tracking-wider">
            Searched For: {query}
          </h6>
          <p className="mt-[5px] text-[14px] sm:text-[15px] tracking-wide text-gray-400">
            Note: All movie data displayed is sourced from TMDB
          </p>
        </div>

        {isLoading ? (
          <LoaderComponent />
        ) : searchMovies.length === 0 ? (
          <div
            className="relative h-screen
            text-white text-center mt-6"
          >
            <p>No search results found for "{query}".</p>
          </div>
        ) : (
          <div className="px-5 md:px-10 mt-[50px] flex flex-wrap justify-around gap-5">
            {searchMovies.map((movie, index) => (
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

        {searchMovies.length > 0 && (
          <div className="text-center">
            <button
              className="w-[280px] text-[15px] font-medium text-white py-2 px-5 rounded-[5px] tracking-wide mt-[50px] bg-secondary hover:bg-primary"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Browse_Movies;
