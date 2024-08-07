import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className=" w-60 overflow-hidden h-36 pr-2">
      <img alt="Movie" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
