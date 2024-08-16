import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-white text-left pl-6">
        Page Not Found
      </h1>
      <div className="flex content-center justify-center items-center">
        <p className="font-bold text-2xl text-white text-left p-6">
          Sorry, but the page you were looking for could not be found.
        </p>
        <img
          className="flex content-center"
          src="https://media.giphy.com/media/14tvbepZ8vhU40/giphy.gif?cid=790b7611vklnzquyc8wpvw794vty1dpa1g9sqvh70fei9s9f&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="shrug"
        />
      </div>
    </div>
  );
};

export default NotFound;
