import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div className="flex item-center py-2">
        <img
          className="h-8 w-auto px-2"
          alt="user-icon"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        />
        <span className="font-bold py-1  ">{name}</span>
        <span className="py-1 px-2">{message}</span>
      </div>
    </>
  );
};

export default ChatMessage;
