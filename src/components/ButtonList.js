import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Tech",
  "Elon Musk",
  "Startups",
  "Mark Zuckerberg",
  "Web Development",
  "JavaScript",
  "podcasts",
  "Entrepreneurship",
  // Add other topics as needed
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((topic, index) => (
        <Button key={index} name={topic} />
      ))}
    </div>
  );
};

export default ButtonList;
