import React from "react";
import { useState } from "react";
import search from "../assets/search-svgrepo-com.svg";

const SearchBar = () => {
  return (
    <div className="flex border border-white bg-white rounded">
      <img src={search} alt="" className="p-2" />
      <input
        placeholder="Search for sounds..."
        className="outline-none rounded bg-white"
      />
    </div>
  );
};

export default SearchBar;
