import React from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSLice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  dispatch(() => {
    dispatch(closeMenu());
  }, []);

  const videoUrl = `https://www.youtube.com/embed/${searchParams.get("v")}`;

  return (
    <div className="flex flex-col w-full">
      <div className=" flex ">
        <div>
          <iframe
            className="px-5 py-2"
            width="1000"
            height="500"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full py-2 mr-3 ">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
