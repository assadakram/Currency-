import React, { useState, useEffect } from "react";
import { CurrencyDollar } from "tabler-icons-react";
import { Menu2 } from "tabler-icons-react";


export const Navbar = () => {
  const [state, setstate] = useState(false);
  const [colorTheme, setTheme] = useState(false);

  useEffect(() => {
    const mode = window.localStorage.getItem("toogle");
    setTheme(JSON.parse(mode));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("toogle", JSON.stringify(colorTheme));
  });
  return (
    <div>
      <div className="flex flex-row space-x-14 lg:space-x-2 md:justify-around pt-7  ">
        <div className=" flex items-center lg:hidden md:mt-4">
          <button
            type="button"
            className=" pl-7 mb-18 "
            onClick={() => setstate(!state)}
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <Menu2 size={30} strokeWidth={2} className=" dark:text-white" />
          </button>
        </div>
        <div className="inline-flex text-sm ">
          <a href="/" className="pt-2 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          </a>
          <div className="pl-1 font-bold dark:text-white">
            <p>
              Fundamental <br /> <span className="pb-1">Secrets </span>
            </p>
          </div>
        </div>
        <div className="border-b border-gray-400 navBoarhide lg:space-x-5 xl:space-x-16 lg:-mb-5 border-opacity-25 lg:ml-10  md:ml-4 md:space-x-10">
          <a
            href="/"
            className="text-gray-400 font-normal  dark:hover:text-white hover:text-black"
          >
            COIN
          </a>
          <a
            href="/"
            className="text-gray-400 font-normal  dark:hover:text-white hover:text-black"
          >
            PORTFOLIO
          </a>
          <a
            href="/"
            className="text-gray-400 font-normal  dark:hover:text-white hover:text-black"
          >
            SCREENERS
          </a>
          <a
            href="/"
            className="text-gray-400 font-normal  dark:hover:text-white hover:text-black"
          >
            EDUCATION
          </a>
          <a
            href="/"
            className="text-gray-400 font-normal  dark:hover:text-white hover:text-black"
          >
            PROJECTS
          </a>
          <a
            href="/"
            className="text-gray-400 font-normal dark:hover:text-white hover:text-black "
          >
            EXCHANGES
          </a>
        </div>
        <div className="space-x-1 md:space-x-5 inline-flex lg:ml-10 xl:ml-18 md:ml-20">
          <a
            href="/"
            className="text-gray-400  dark:hover:text-white hover:text-black pt-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
          <div className="">
            <button
              type="button"
              className="inline-flex navBoarhide rounded-lg border dark:border-gray-700  border-gray-300 shadow-sm  lg:px-2 lg:py-2 dark:hover:text-white hover:text-black text-sm font-medium text-gray-400 dark:bg-gray-700 bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              English
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="inline-flex navBoarhide rounded-lg border dark:border-gray-700 border-gray-300 shadow-sm lg:px-1 lg:py-1 dark:hover:text-white hover:text-black text-sm font-medium text-gray-400 dark:bg-gray-700 bg-gray-50 "
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <div className="relative rounded-full border h-7 w-7 flex items-center justify-center border-opacity-5 bg-gray-100 dark:bg-black dark:border-opacity-25">
                <div className="absolute rounded-full inset-0 bg-green-600 filter blur bg-opacity-25 dark:bg-opacity-100 mt-3"></div>
                <span className=" relative">
                  <CurrencyDollar size={18} strokeWidth={3} color={"#40bf50"} />
                </span>
              </div>
              <span className="pl-2 pt-1"> USD </span>
              <svg
                className="-mr-1 ml-2 h-6 w-6 pt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <span
            onClick={() => setTheme(!colorTheme)}
            id="switchTheme"
            className="transform hover:scale-110 motion-reduce:transform-none text-gray-400 hover:text-black dark:hover:text-white pt-1 pr-5"
          >
            {!colorTheme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 pt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </span>
        </div>
      </div>
      {state && (
        <div className="lg:hidden  " id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="  text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              COIN
            </a>

            <a
              href="/"
              className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              PORTFOLIO
            </a>

            <a
              href="/"
              className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              SCREENERS
            </a>

            <a
              href="/"
              className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              EDUCATION
            </a>
            <a
              href="/"
              className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              EXCHANGES
            </a>
            <a
              href="/"
              className="border-b text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              EDUCATION
            </a>
            <a
              href="/"
              className="text-gray-400  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              English
            </a>
            <a
              href="/"
              className="inline-flex  text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="relative mr-2 rounded-full border h-7 w-7 flex items-center justify-center border-opacity-5 bg-gray-100 dark:bg-black dark:border-opacity-25">
                <div className="absolute rounded-full inset-0 bg-green-600 filter blur bg-opacity-25 dark:bg-opacity-100 mt-3"></div>
                <span className=" relative">
                  <CurrencyDollar size={18} strokeWidth={3} color={"#40bf50"} />
                </span>
              </div>
              USD 
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
