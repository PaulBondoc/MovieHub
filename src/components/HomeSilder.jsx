import { useEffect, useState } from "react";
import { fetchMovies } from "../services/apiService";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import HomeSliderDetails from "./HomeSliderDetails";
import LoaderComponent from "./LoaderComponent";

const HomeSilder = ({ onOpenTrailer }) => {
  const [movieList, setMovieList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const fetchedData = await fetchMovies();
        shuffleArray(fetchedData);
        setMovieList(fetchedData);
      } catch (error) {
        console.error("Error getting movielist", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    getMovieList();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <Swiper
          loop={true}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          slidesPerView={1}
          autoplay={{
            delay: 7000,
          }}
          allowTouchMove={false}
        >
          {movieList.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img
                src={`${IMG_BASE_URL}${movie.backdrop_path}`}
                className="h-[90vh] sm:h-screen w-full object-cover"
                loading="lazy"
              />

              <div className="absolute z-[5] top-0 left-0 w-full h-screen bg-[rgba(0,0,0,.55)] " />
              <div className="px-5 md:px-10 text-white absolute z-[5] top-[50%] sm:top-[55%] -translate-y-[50%] w-full sm:w-[600px]">
                <div>
                  <HomeSliderDetails
                    id={movie.id}
                    onOpenTrailer={onOpenTrailer}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default HomeSilder;
