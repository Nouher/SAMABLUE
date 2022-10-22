import React, { useState } from "react";

const FAQ = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="border-2 border-gray-100 rounded-lg ">
        <button
          className="flex items-center justify-between w-full p-8"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h1 className="font-semibold text-gray-700 ">{props.question}</h1>

          <span
            className={
              open
                ? "text-gray-400 bg-gray-200 rounded-full"
                : "text-white bg-blue-400 rounded-full"
            }
          >
            {open && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 moin "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                ></path>
              </svg>
            )}
            {!open && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 plus "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            )}
          </span>
        </button>

        <hr className="border-gray-200 " />

        {open && (
          <p id="Q1" className="p-8 text-sm text-gray-500 ">
            {props.answer}
            <br />
            <br />
            <ul className="list-decimal">
              {props.list.map((item) => (
                <li className="pb-3">{item}</li>
              ))}
            </ul>
          </p>
        )}
      </div>
    </>
  );
};

export default FAQ;
