import React from "react";
import SoundCard from "../components/SoundCard.jsx";
import SearchBar from "../components/SearchBar.jsx";

const Sounds = () => {
  return (
    <div className="flex flex-col bg-black">
      <div className="w-full flex items-center sm:flex-row flex-col mb-6 gap-20">
        <h2 className="font-bold text-3xl text-white text-left pl-6">Sounds</h2>
        <div className="items-start">
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 content-white text-white">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sound, i) => (
          <SoundCard key={sound.key} sound={sound} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Sounds;
