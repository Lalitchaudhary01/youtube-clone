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
    <div className="mx-4 my-2 w-64 rounded overflow-hidden shadow-lg bg-gray-800 text-white">
      <img
        className="w-full"
        src={thumbnails.medium.url}
        alt="Video Thumbnail"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-400 text-base">{channelTitle}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold mr-2">
          {statistics.viewCount} views
        </span>
        {/* Additional statistics could be added here */}
      </div>
    </div>
  );
};

export default VideoCard;
