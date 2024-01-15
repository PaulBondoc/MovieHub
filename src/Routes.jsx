import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Browse_Movies from "./pages/Browse_Movies";
import Genres from "./pages/Genres";
import Movie from "./pages/Movie";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse_movies" element={<Browse_Movies />} />
      <Route path="/genres/:genreId" element={<Genres />} />
      <Route path="/movie/:movieId" element={<Movie />} />
    </Routes>
  );
};

export default AppRoutes;
