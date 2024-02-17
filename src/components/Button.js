import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-900 text-white rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
