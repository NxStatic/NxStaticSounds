import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import lock from "../assets/lock-svgrepo-com1.svg";
import lockWhite from "../assets/lock-svgrepo-com1.svg";
import menu from "../assets/menu-svgrepo-com.svg";
import close from "../assets/xmark-svgrepo-com.svg";
import logo from "../assets/NxStatic Logos/NxStaticLogo_TextWhite.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-black p-6">
      <div className=" w-full h-full flex justify-between items-center">
        <div className="hidden md:flex items-center content-center">
          <ul className="flex gap-8">
            <li>
              <NavLink to="/">
                <img src={logo} alt="NxStatic" className="h-[24px]" />
              </NavLink>
            </li>
            <li className="font-bold text-md text-gray-400 hover:text-white">
              <NavLink to="/sounds">Sounds</NavLink>
            </li>
            {/* <li className="font-bold text-md text-gray-400 hover:text-white">
              <NavLink to="/library">Library</NavLink>
            </li> */}
          </ul>
        </div>

        <div className="hidden md:flex text-md font-bold gap-2">
          <NavLink to="/login"> 
            <button className="px-6 py-2 rounded text-gray-400 hover:text-white hover:border border:bg-white bg-transparent">
              Login 
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="px-6 py-2 rounded bg-white hover:bg-slate-200 text-black font-bold">
              Sign Up
            </button>
          </NavLink>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : menu} alt="menu" />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden "
            : "hidden"
        }
      >
        <ul className="flex flex-col">
          <NavLink to="/" className="p-3 hover:bg-gray-100">
            Home
          </NavLink>
          <NavLink to="/sounds" className="p-3 hover:bg-gray-100">
            Sounds
          </NavLink>
          <div className="flex flex-col my-4 gap-4">
            <button className="border border-black flex justify-center items-center bg-transparent px-6 gap-2 py-4 rounded">
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className="px-8 py-5 rounded bg-black text-white font-bold">
              <NavLink to="/signup">Sign Up</NavLink>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
