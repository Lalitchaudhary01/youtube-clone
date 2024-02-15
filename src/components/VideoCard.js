import React from "react";

const VideoCard = ({ info }) => {
  // Check if info object is defined
  if (!info) {
    return <div>No video information available.</div>;
  }

  // Destructure snippet from info object
  const { snippet, statistics } = info;

  // Check if snippet is defined
  if (!snippet) {
    return <div>No snippet information available.</div>;
  }

  // Destructure properties from snippet object
  const { channelTitle, title, thumbnails } = snippet;

  // Check if channelTitle, title, and thumbnails are defined
  if (!channelTitle || !title || !thumbnails) {
    return <div>Missing video details.</div>;
  }

  return (
    <div className="my-3 mx-5 w-60 shadow-lg">
      <div className=" w-64 h-70 rounded overflow-hidden shadow-lg bg-gray-800 text-white">
        <img
          className="w-30 h-30 object-cover"
          src={thumbnails.medium.url}
          alt="Video Thumbnail"
        />
        <div className="px-3 py-1">
          <div className=" text-lg h-12 mb-3 overflow-hidden">{title}</div>
          <p className="text-gray-400 mb-1 text-base h-8 overflow-hidden">
            {channelTitle}
          </p>
          <div className="flex justify-between text-gray-400 text-sm mt-1">
            <span>{statistics.viewCount} views</span>
            {/* Additional statistics could be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
