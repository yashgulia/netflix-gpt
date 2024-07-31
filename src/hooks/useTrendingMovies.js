import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=3",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
    // eslint-disable-next-line
  }, []);
};

export default useTrendingMovies;
