import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-55 bg-gray-900">
      <ul>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          Shorts
        </li>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          Videos
        </li>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          Live
        </li>
      </ul>
      <h1 className="text-white text-lg font-bold mb-4">Subscriptions</h1>
      <ul>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          Music
        </li>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          Sports
        </li>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          Gaming
        </li>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          Movies
        </li>
      </ul>
      <h1 className="text-white text-lg font-bold mb-4">Watch Later</h1>
      <ul>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          Music
        </li>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          Sports
        </li>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          Gaming
        </li>
        <li className="mb-2 text-gray-300 hover:text-white cursor-pointer transition duration-300">
          Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
