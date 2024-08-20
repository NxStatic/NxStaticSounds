import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";


const SoundCard = ({song, i}) => {
  const activeSong = 'Test'

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white bg-opacity-70 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-30 group-hover:flex ${activeSong === song ? 'flex bg-black bg-opacity-70' : 'hidden'} `}> 
          <PlayPause/>
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link >{}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link >{}</Link>
        </p>
      </div>
    </div>
  );
};

export default SoundCard;
