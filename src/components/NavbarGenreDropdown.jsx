import React, { useEffect, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { fetchMovieGenres } from "../services/apiService";
import { Link } from "react-router-dom";
const NavbarGenreDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movieGenres, setMovieGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Genres");

  useEffect(() => {
    const getMovieGenres = async () => {
      const fetchedData = await fetchMovieGenres();
      setMovieGenres(fetchedData);
    };

    getMovieGenres();
  }, []);

  const handleClickedGenre = (genre) => {
    setSelectedGenre(genre.name === "Science Fiction" ? "Sci-Fi" : genre.name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`bg-secondary py-2 px-[15px] min-w-[170px] flex justify-between gap-5 text-[14px] rounded-[5px] tracking-wide ${props.style}`}
      >
        {selectedGenre}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-5 " />
        ) : (
          <AiOutlineCaretUp className="h-5 " />
        )}
      </button>

      {isOpen && (
        <div className="absolute bg-secondary text-[14px] w-full top-[40px] py-2 flex flex-col gap-y-1 items-start rounded-[5px]">
          {movieGenres.map((genre) => (
            <Link
              key={genre.id}
              to={`/genres/${genre.id}`}
              className="w-full hover:bg-[#474747] px-2"
              onClick={() => handleClickedGenre(genre)}
            >
              {genre.name === "Science Fiction" ? "Sci-Fi" : genre.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarGenreDropdown;
