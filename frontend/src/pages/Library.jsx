// This is for bookmarked(saved) sounds
import React from "react";
import {Error, Loader, SoundCard } from "../components"

const Library = () => {

  return (
    <div className="bg-black">
      <div className="w-full flex flex-col items-center sm:flex-row mb-6 gap-20">
        <h2 className="font-bold text-3xl text-white text-left pl-6">Library</h2>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8 content-white text-white p-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sound, i) => (
          <SoundCard key={sound.key} sound={sound} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Library;
