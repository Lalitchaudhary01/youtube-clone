import React from "react";

const Head = () => {
  return (
    <div className="grid grid-cols-3 items-center p-4 bg-gray-900 shadow-lg">
      <div className="flex col-span-1 justify-start items-center">
        <img
          className="h-8 w-auto mr-4"
          alt="menu"
          src="https://www.shutterstock.com/image-vector/hamburger-menu-icon-mobile-apps-260nw-360130484.jpg"
        />
        <img
          className="h-8 w-auto mx-2"
          alt="youtube-logo"
          src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
        />
      </div>
      <div className="flex col-span- justify-center">
        <input
          className="px-4 py-2 w-full rounded-md bg-gray-800 text-white focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="ml-2 px-4 py-2 bg-red-600 rounded-md text-white">
          Search
        </button>
      </div>
      <div className="flex col-span-1 justify-end">
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
