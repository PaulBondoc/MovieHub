import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { fetchMovieTrailer } from "../services/apiService";
const Trailer = ({ onClose, movieId }) => {
  const [trailer, setTrailer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieTrailer = async () => {
      try {
        const fetchedData = await fetchMovieTrailer(movieId);
        setTrailer(fetchedData);
      } catch (error) {
        console.error("Error fetching trailer:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    getMovieTrailer();
  }, [movieId]);

  const firstTrailer = trailer.length > 0 ? trailer[0] : null;

  return (
    <div
      className={`fixed z-[1000] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-screen bg-blackglass`}
    >
      {isLoading ? (
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[60px] h-[60px] rounded-full spinner"></div>
        </div>
      ) : (
        firstTrailer && (
          <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <IoIosClose
              className="absolute top-3 end-8 md:end-14 text-white rounded-full w-[40px] h-[40px] bg-secondary cursor-pointer"
              onClick={onClose}
            />
            <iframe
              className="px-5 md:px-10 md:w-[800px] w-[100vw] h-[300px] sm:h-[500px]"
              src={`https://www.youtube.com/embed/${firstTrailer.key}`}
              allowFullScreen
            ></iframe>
          </div>
        )
      )}
    </div>
  );
};

export default Trailer;
