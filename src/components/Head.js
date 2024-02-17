import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSLice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    console.log("API CALL -" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-3 items-center p-4 bg-gray-900 shadow-md">
      <div className="flex items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer h-8 w-auto mr-2 ml-4 mx-5"
          alt="menu"
          src="https://www.shutterstock.com/image-vector/hamburger-menu-icon-mobile-apps-260nw-360130484.jpg"
        />
        <img
          className="h-10 w-auto mx-12 "
          alt="youtube-logo"
          src="https://ongpng.com/wp-content/uploads/2023/04/3-13.png"
        />
      </div>
      <div className="flex ">
        <input
          className="px-4 py-2 w-full rounded-md bg-gray-800 text-white focus:outline-none"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="ml-2 px-4 py-2 bg-red-600 rounded-md text-white">
          Search
        </button>
        <div className="fixed bg-white my-10 shadow-lg">
          <ul>
            <li className="py-2 shadow-lg px-2">I phone</li>
            <li>I phone</li>
            <li>I phone</li>
            <li>I phone</li>
            <li>I phone</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end">
        <img
          className="h-8 w-auto"
          alt="user-icon"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
