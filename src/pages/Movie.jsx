import React, { useState } from "react";
import ViewMovieInfo from "../components/ViewMovieInfo";
import Trailer from "../components/Trailer";

const Movie = () => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOpenTrailer = (movieId) => {
    setSelectedMovie(movieId);
    setIsTrailerOpen(true);
  };

  const handleCloseTrailer = () => {
    setSelectedMovie(null);
    setIsTrailerOpen(false);
  };

  return (
    <main>
      <section>
        <div className="text-white">
          <ViewMovieInfo onOpenTrailer={handleOpenTrailer} />
          {isTrailerOpen && (
            <Trailer movieId={selectedMovie} onClose={handleCloseTrailer} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Movie;
