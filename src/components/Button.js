import React from "react";

const Button = ({ name }) => {
  return (
    <div className="mt-4 mb-2">
      <button className="mx-2 px-5 py-2 m-1 bg-gray-800 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        {name}
      </button>
    </div>
  );
};

export default Button;
