import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-slate-400">{title}</h1>
      <p className="py-6 text-md w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-8 text-xl rounded-md hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-8 text-xl bg-opacity-70 rounded-md hover:bg-opacity-40">
          ❕ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
