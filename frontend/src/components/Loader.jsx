import React from "react";
import logo from "../assets/NxStatic Logos/NxStaticLogo_TextWhite.svg";

const Loader = ({ title }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img src={logo} alt="Loader" className="w-32 h-32 object-contain" />
      <h1 className="font-bold text-2xl text-white mt-2">
        {title || "Loading..."}
      </h1>
    </div>
  );
};

export default Loader;
