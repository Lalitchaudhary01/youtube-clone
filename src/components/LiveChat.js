import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      //api polling
      // console.log("Api");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "hey!!",
        })
      );
    }, 100);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-1310 h-[485px] border border-black overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("on form submit", liveMessage);
        }}
      >
        <input
          className="w-full px-4 py-2 outline-none"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-4 m-2 py-2 bg-gray-400 text-white font-semibold rounded-r">
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
