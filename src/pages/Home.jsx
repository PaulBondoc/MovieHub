import { useEffect, useState } from "react";
import HomeSilder from "../components/HomeSilder";
import Trailer from "../components/Trailer";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Trending from "../components/Trending";
import Theathers from "../components/Theathers";
import PopularPeople from "../components/PopularPeople";
import TrendingPeople from "../components/TrendingPeople";
const Home = () => {
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
        <HomeSilder onOpenTrailer={handleOpenTrailer} />
        {isTrailerOpen && (
          <Trailer movieId={selectedMovie} onClose={handleCloseTrailer} />
        )}
      </section>
      <div className="hidden sm:block relative z-[10] w-full h-[5px] bg-background shadow-myShadow"></div>
      <section className="mt-[2rem] relative z-[11] overflow-hidden">
        <Popular />

        <TopRated />

        <Trending />

        <Theathers />

        <PopularPeople />

        <TrendingPeople />
      </section>
    </main>
  );
};

export default Home;
