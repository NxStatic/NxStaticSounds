import { NavLink } from "react-router-dom";
import advert from "../assets/Rron_Triple_NoLogo.jpg";
import hero from "../assets/hero.jpg";
import head from "../assets/Headphones_&_Song_Graphic.png";

export default function Landing() {
  return (
    <>
      <div className="w-full bg-black text-white">
        <div className="max-w-[1480px] m-auto flex flex-col items-center">
          <img src={hero} alt="Image" />
          <p className="text-2xl text-center p-4">
            Browse through hundreds of our curated sounds with your new sample
            library. It starts with NxStatic.
          </p>
          <button className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white font-bold p-4 w-1/8 m-2">
            <NavLink to="/signup">Sign Up for Free</NavLink>
          </button>
        </div>
      </div>
      <div className="w-full bg-black text-white grid grid-cols-2 pt-10 pb-10">
        <div className="max-w-[1480px] m-auto">
          <div className="text-gray-400 text-xs pb-2">SOUNDS</div>
          <h2 className="font-extrabold text-3xl">
            Come explore our library...
          </h2>
          <p className="text-2xl pt-2 pb-4">
            Browse through our personally selected collection of sounds. Don't
            be shy, take a peek.
          </p>
          <button className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white font-bold w-1/8">
            <NavLink to="/sounds">Search Sounds</NavLink>
          </button>
        </div>
        <div className="max-w-[1480px] m-auto">
          <img src={head} alt="Image" />
        </div>
      </div>
      <div className="bg-black">
        <div className="relative text-center items-center">
          <img src={advert} alt="Image" />
          <div className="w-full absolute top-0 left-0 text-center content-center mt-10">
            <h2 className="text-6xl font-bold text-red-500 mt-64">
              Try NxStatic Today
            </h2>
            <button className="mt-10 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              <NavLink to="/signup">Try it</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
