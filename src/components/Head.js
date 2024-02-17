import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSLice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/SearchSlice";

const Head = () => {
  // useState hooks
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // #About Debouncing
  // key stroke - i
  // - render the Component
  // - useEffect()
  // - start timer -> make api call after 200ms

  // key stroke - ip
  // - destroy the component (useEffect return method) effective if and only if p key is pressed before the 200ms timer expired or else it will try to destroy the timer which is already expired with an api call made
  // - re-render the component
  // - useEffect
  // - start timer -> make api call after 200ms

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-cols-3 items-center p-4 bg-gray-900 shadow-md">
      <div className="flex items-center">
        <img
          onClick={toggleMenuHandler} // Simplified onClick event
          className="cursor-pointer h-8 w-auto mr-2 ml-4 mx-5"
          alt="menu"
          src="https://www.shutterstock.com/image-vector/hamburger-menu-icon-mobile-apps-260nw-360130484.jpg"
        />
        <img
          className="h-10 w-auto mx-12"
          alt="youtube-logo"
          src="https://ongpng.com/wp-content/uploads/2023/04/3-13.png"
        />
      </div>
      <div className="flex relative">
        <input
          className="px-4 py-2 w-full rounded-md bg-gray-800 text-white focus:outline-none"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="ml-2 px-4 py-2 bg-red-600 rounded-md text-white">
          Search
        </button>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bg-white py-2 px-2 my-11 shadow-lg w-[22rem] rounded-md">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="px-3 py-2 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
