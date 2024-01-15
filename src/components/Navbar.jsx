import Profile from "../assets/profile.jpg";
import { FaSearch } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import NavbarGenreDropdown from "./NavbarGenreDropdown";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScroll, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", () => {
      handleScroll();
      setIsMenuOpen(false);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenMenuBar = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenuBar = () => {
    setIsMenuOpen(false);
  };

  const handleSearch = () => {
    navigate(`/browse_movies?q=${searchKey}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearchOnSmallScreen = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <header
        className={`${
          isScroll ? "bg-background shadow-navShadow " : null
        } fixed z-[100] top-0 left-0 end-0 px-5 md:px-10 py-3 md:py-5 flex flex-wrap justify-between items-center text-white transition-all duration-200 ease-in-out `}
      >
        <div>
          <Link to="/" className="logo tracking-wider text-[24px]">
            MOVIE<span className="text-accent">HUB</span>
          </Link>
        </div>
        <div className="flex items-center gap-[10px]">
          <div
            className="md:hidden w-[40px] h-[40px] rounded-full bg-secondary grid place-items-center cursor-pointer"
            onClick={handleOpenMenuBar}
          >
            <RiMenu3Line className="text-[20px]" />
          </div>
          <div className="hidden md:block">
            <NavbarGenreDropdown />
          </div>

          <div className="hidden md:flex items-center gap-[5px] bg-secondary rounded-full">
            <input
              type="text"
              className="ps-4 sm:ps-5 py-[10px] w-[300px] text-[14px] bg-transparent"
              placeholder="Search Movie..."
              onChange={(e) => setSearchKey(e.target.value)}
              onKeyDown={handleKeyPress}
            />

            <Link to={`/browse_movies?q=${searchKey}`}>
              <FaSearch className="me-5 text-[18px] cursor-pointer" />
            </Link>
          </div>

          <div>
            <img
              src={Profile}
              alt="Profile"
              className="w-[40px] rounded-full border-[1px] sm:border-2 border-accent"
              loading="lazy"
            />
          </div>
        </div>

        {/* SmallScreen Navigation  */}
        {isMenuOpen && (
          <div
            className={`fixed left-0 end-0 top-0 bg-background p-10 shadow-md`}
          >
            <IoClose
              className="text-[30px] absolute end-3 top-3 cursor-pointer"
              onClick={handleCloseMenuBar}
            />
            <div className="mt-[20px]">
              <NavbarGenreDropdown style={"w-full justify-between"} />
            </div>
            <div className="flex justify-between items-center gap-[5px] bg-secondary rounded-[5px] mt-[14px]">
              <input
                type="text"
                className="ps-5 py-[10px] w-full text-[15px] bg-transparent"
                placeholder="Search Movie..."
                onChange={(e) => setSearchKey(e.target.value)}
                onKeyDown={handleSearchOnSmallScreen}
              />
              <Link to={`/browse_movies?q=${searchKey}`}>
                <FaSearch className="me-5 text-[18px] cursor-pointer" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
