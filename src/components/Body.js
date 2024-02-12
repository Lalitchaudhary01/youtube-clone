import React from "react";
import Sidebar from "./Sidebar";
import MainComponents from "./MainComponents";

const Body = () => {
  return (
    <div className="flex">
      Body
      <Sidebar />
      <MainComponents />
    </div>
  );
};

export default Body;
