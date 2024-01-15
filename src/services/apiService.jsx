import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchMovieGenres = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    return data.genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
  }
};

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/discover/movie?api_key=${API_KEY}&page=2`
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

export const fetchMovieTrailer = async (id) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching movie trailer:", error);
  }
};

export const fetchPopularMovies = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/popular?api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/top_rated?api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching toprated movies:", error);
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const fetchTheatreMovies = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/now_playing?api_key=${API_KEY}`
    );

    return data.results;
  } catch (error) {
    console.error("Error fetching theatre movies:", error);
  }
};

export const fetchPopularPeople = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/person/popular?api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching popular people:", error);
  }
};

export const fetchTrendingPeople = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/trending/person/week?api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching trending people:", error);
  }
};

export const fetchMoviesWithGenres = async (id, page = 1) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}&page=${page}`
    );

    return data.results;
  } catch (error) {
    console.error("Error fetching movies with genre:", error);
  }
};

export const fetchSearchedMovies = async (query, page) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/search/movie?query=${query}&api_key=${API_KEY}&page=${page}`
    );

    return data.results;
  } catch (error) {
    console.error(`Error fetching this data: ${query}:, ${error}`);
  }
};

export const fetchMovieInfo = async (id) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/${id}?api_key=${API_KEY}`
    );

    return data;
  } catch (error) {
    console.error("Error fetching movie info:", error);
  }
};

export const fetchSimilarMovies = async (id) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/${id}/similar?api_key=${API_KEY}`
    );

    return data.results;
  } catch (error) {
    console.error("Error fetching similar movies:", error);
  }
};

export const fetchMoviePosters = async (id) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/${id}/images?api_key=${API_KEY}&limit=20`
    );

    return data.posters?.slice(0, 20);
  } catch (error) {
    console.error("Error fetching movie posters:", error);
  }
};
