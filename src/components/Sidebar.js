import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // early return pattern - if the condition is false the code will not be executed beneath it or use ternary operators
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48 ">
      <ul>
        <li className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-2 mb-2"
          >
            <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
          </svg>
          <Link to="/">Home</Link>
        </li>
        <li className="flex cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-2 mb-2"
          >
            <path d="M 15.886719 1 C 14.974131 1 14.077693 1.2286385 13.287109 1.65625 L 5.5664062 5.7207031 L 5.5664062 5.71875 C 3.7637541 6.6652034 2.6367187 8.5322799 2.6367188 10.566406 C 2.6367188 11.911504 3.2225585 13.082394 4.046875 14.046875 C 3.2161002 15.0216 2.6367187 16.195885 2.6367188 17.521484 C 2.6367188 20.532674 5.1018215 23 8.1132812 23 C 9.0303925 23 9.9287625 22.773103 10.716797 22.341797 L 18.292969 18.353516 L 18.259766 18.369141 C 20.151702 17.459981 21.363281 15.531898 21.363281 13.433594 C 21.363281 12.088496 20.777441 10.917606 19.953125 9.953125 C 20.783897 8.9783946 21.363281 7.8041153 21.363281 6.4785156 C 21.363281 3.4673258 18.898179 1 15.886719 1 z M 15.886719 3 C 17.813259 3 19.363281 4.5517054 19.363281 6.4785156 C 19.363281 7.5499776 18.888956 8.5222239 18.080078 9.1777344 L 17.121094 9.9550781 L 18.080078 10.732422 C 18.871608 11.373406 19.363281 12.344494 19.363281 13.433594 C 19.363281 14.75529 18.584642 15.993566 17.392578 16.566406 L 17.376953 16.574219 L 9.7636719 20.583984 L 9.7578125 20.587891 C 9.2778524 20.850605 8.6961702 21 8.1132812 21 C 6.1867412 21 4.6367188 19.448295 4.6367188 17.521484 C 4.6367188 16.450022 5.1110438 15.477776 5.9199219 14.822266 L 6.8789062 14.044922 L 5.9199219 13.267578 C 5.1283915 12.626594 4.6367188 11.655506 4.6367188 10.566406 C 4.6367188 9.266533 5.3427459 8.095781 6.4960938 7.4902344 L 6.4980469 7.4902344 L 14.232422 3.4179688 L 14.238281 3.4140625 C 14.729251 3.1482632 15.309951 3 15.886719 3 z M 10 9 L 10 15 L 15 12 L 10 9 z"></path>
          </svg>
          Shorts
        </li>
        <li className="flex cursor-pointer">
          <svg
            className="mr-2 mb-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
          Videos
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="flex mt-4 cursor-pointer">
          <svg
            width="24"
            height="24"
            className="mr-2 mb-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
          Music
        </li>
        <li className="flex cursor-pointer">
          <svg
            width="24"
            height="24"
            className="mr-2 mb-2"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>sports-soccer</title>{" "}
              <g id="Layer_2" data-name="Layer 2">
                {" "}
                <g id="invisible_box" data-name="invisible box">
                  {" "}
                  <rect width="48" height="48" fill="none"></rect>{" "}
                </g>{" "}
                <g id="Q3_icons" data-name="Q3 icons">
                  {" "}
                  <g>
                    {" "}
                    <polygon points="17.5 21.6 20 29 28 29 30.5 21.6 24 17 17.5 21.6"></polygon>{" "}
                    <path d="M45.5,19.1A22.1,22.1,0,0,0,24,2a21.2,21.2,0,0,0-4.9.6A22,22,0,0,0,24,46a28.1,28.1,0,0,0,4.9-.5A22.1,22.1,0,0,0,45.5,19.1Zm-7,15.6-1.1-3.3H29.5l-2.6,7.6,2.8,2-1.7.5a18.1,18.1,0,0,1-4,.4,17.9,17.9,0,0,1-5.7-.9l2.8-2-2.6-7.6H10.6L9.5,34.7a17,17,0,0,1-3-6.7A14.8,14.8,0,0,1,6,23.9l2.8,2,6.3-4.8-2.3-7.6H9.4a18.3,18.3,0,0,1,9.2-6.6l-1.1,3.2L24,14.7l6.5-4.6L29.4,6.8a18.6,18.6,0,0,1,9.3,6.7H35.2l-2.3,7.6,6.3,4.8L42,23.8A18.9,18.9,0,0,1,38.5,34.7Z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          Sports
        </li>
        <li className="flex cursor-pointer">
          <svg
            width="24"
            height="24"
            className="mr-2 mb-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect x="0" fill="none" width="20" height="20"></rect>{" "}
              <g>
                {" "}
                <path d="M15.9 5.5C15.3 4.5 14.2 4 13 4H7c-1.2 0-2.3.5-2.9 1.5-2.3 3.5-2.8 8.8-1.2 9.9 1.6 1.1 5.2-3.7 7.1-3.7s5.4 4.8 7.1 3.7c1.6-1.1 1.1-6.4-1.2-9.9zM8 9H7v1H6V9H5V8h1V7h1v1h1v1zm5.4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm1.9-2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
          Gaming
        </li>
        <li className="flex cursor-pointer">
          <svg
            width="24"
            height="24"
            className="mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity=".6"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 4h18a1 1 0 0 1 1 1v1H2V5a1 1 0 0 1 1-1z"
                fill="#000000"
              ></path>
              <path
                opacity=".3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 2h14a1 1 0 0 1 1 1v1H4V3a1 1 0 0 1 1-1z"
                fill="#000000"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 6h22a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 2v3h3V8H1zm0 5v3h3v-3H1zm0 5v3h3v-3H1zM20 8v3h3V8h-3zm0 5v3h3v-3h-3zm0 5v3h3v-3h-3z"
                fill="#000000"
              ></path>
            </g>
          </svg>
          Movies
        </li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li className="flex mt-4 cursor-pointer">
          <svg
            width="24"
            height="24"
            className="mr-2 mb-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
          Music
        </li>
        <li className="flex cursor-pointer">
          <svg
            width="24"
            height="24"
            className="mr-2 mb-2"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>sports-soccer</title>{" "}
              <g id="Layer_2" data-name="Layer 2">
                {" "}
                <g id="invisible_box" data-name="invisible box">
                  {" "}
                  <rect width="48" height="48" fill="none"></rect>{" "}
                </g>{" "}
                <g id="Q3_icons" data-name="Q3 icons">
                  {" "}
                  <g>
                    {" "}
                    <polygon points="17.5 21.6 20 29 28 29 30.5 21.6 24 17 17.5 21.6"></polygon>{" "}
                    <path d="M45.5,19.1A22.1,22.1,0,0,0,24,2a21.2,21.2,0,0,0-4.9.6A22,22,0,0,0,24,46a28.1,28.1,0,0,0,4.9-.5A22.1,22.1,0,0,0,45.5,19.1Zm-7,15.6-1.1-3.3H29.5l-2.6,7.6,2.8,2-1.7.5a18.1,18.1,0,0,1-4,.4,17.9,17.9,0,0,1-5.7-.9l2.8-2-2.6-7.6H10.6L9.5,34.7a17,17,0,0,1-3-6.7A14.8,14.8,0,0,1,6,23.9l2.8,2,6.3-4.8-2.3-7.6H9.4a18.3,18.3,0,0,1,9.2-6.6l-1.1,3.2L24,14.7l6.5-4.6L29.4,6.8a18.6,18.6,0,0,1,9.3,6.7H35.2l-2.3,7.6,6.3,4.8L42,23.8A18.9,18.9,0,0,1,38.5,34.7Z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          Sports
        </li>
        <li className="flex cursor-pointer">
          <svg
            width="24"
            height="24"
            className="mr-2 mb-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect x="0" fill="none" width="20" height="20"></rect>{" "}
              <g>
                {" "}
                <path d="M15.9 5.5C15.3 4.5 14.2 4 13 4H7c-1.2 0-2.3.5-2.9 1.5-2.3 3.5-2.8 8.8-1.2 9.9 1.6 1.1 5.2-3.7 7.1-3.7s5.4 4.8 7.1 3.7c1.6-1.1 1.1-6.4-1.2-9.9zM8 9H7v1H6V9H5V8h1V7h1v1h1v1zm5.4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm1.9-2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
          Gaming
        </li>
        <li className="flex cursor-pointer">
          <svg
            width="24"
            height="24"
            className="mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity=".6"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 4h18a1 1 0 0 1 1 1v1H2V5a1 1 0 0 1 1-1z"
                fill="#000000"
              ></path>
              <path
                opacity=".3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 2h14a1 1 0 0 1 1 1v1H4V3a1 1 0 0 1 1-1z"
                fill="#000000"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 6h22a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 2v3h3V8H1zm0 5v3h3v-3H1zm0 5v3h3v-3H1zM20 8v3h3V8h-3zm0 5v3h3v-3h-3zm0 5v3h3v-3h-3z"
                fill="#000000"
              ></path>
            </g>
          </svg>
          Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
