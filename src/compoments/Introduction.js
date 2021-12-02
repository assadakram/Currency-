import React from "react";
import { ArrowNarrowUp } from "tabler-icons-react";
export const Introduction = () => {
  return (
    <div>
      <div class=" lg:inline-flex lg:justify-between lg:divide-x lg:divide-gray-400 lg:divide-opacity-25 ">
        <div className="md:inline-flex divide-y sm:divide-y-0 md:divide-x divide-gray-400 divide-opacity-25 border-t border-b lg:border-t-0 lg:border-b-0 border-gray-400 border-opacity-25">
          <div className="">
            <div className="p-7 md:p-12 lg:-ml-6 2xl:ml-5 ">
              <p className="text-xs text-gray-400 ">Market Cap</p>
              <div className="inline-flex pt-2">
                <span className="pt-1">
                 
                </span>
                <h1 className="font-bold text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                <span className=" text-gray-400"> $ </span>2,345,187,152,163
                </h1>
              </div>
              <div>
                <div className="inline-flex">
                  <p className="text-red-400 pl-6 lg:-ml-6 xl:-ml-6 font-mono text-md">11.87%</p>
                  <div className="relative lg:-ml-8 xl:ml-5">
                    <div className="absolute inset-1 bg-red-500 h-1 w-36 rounded-lg mt-2 ml-12   filter blur"></div>
                    <div class="relative pt-2 pl-16">
                      <div class="overflow-hidden h-2 w-36 mb-4 text-xs flex rounded bg-gradient-to-r from-red-400 to-red-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="p-7 md:pl-14 md:p-11 md:w-96 lg:w-max lg:-ml-6 xl:ml-1 2xl:ml-5">
              <p className="text-xs text-gray-400 ">24h Vol</p>
              <div className="inline-flex pt-2">
                <h1 className="font-bold text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                 <span className=" text-gray-400"> $</span> 106,146,348,756
                </h1>
              </div>
              <div>
                <div className="inline-flex lg:-ml-3 pt-1">
                  <span className="pl-2 pt-1">
                    <ArrowNarrowUp
                      size={16}
                      strokeWidth={2}
                      color={"#40bf4b"}
                    />
                  </span>
                  <p className="text-green-400 pl-1 font-mono text-md">
                    16.36%
                  </p>
                  <div className="relative lg:-ml-3">
                    <div className="absolute inset-1 bg-green-500 h-2 w-36 lg:w-28 xl:w-36 rounded-lg mt-2 ml-7 bg-opacity-75  filter blur"></div>
                    <div class="relative pt-2 pl-10">
                      <div class="overflow-hidden h-2 w-36 lg:w-28 xl:w-36 mb-4 text-xs flex rounded bg-gradient-to-r from-green-300 to-green-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:inline-flex  md:divide-x divide-y sm:divide-y-0 divide-gray-400 divide-opacity-25 border-b lg:border-b-0 border-gray-400 border-opacity-25">
          <div className="">
            <div className="p-8 md:p-9 lg:mt-5 2xl:ml-5">
              <p className="text-xs text-gray-400 pl-0.5">Dominance</p>
              <div className="inline-flex pt-2">
                <span className="">
                  <p className=" text-gray-400 text-3xl lg:text-xl xl:text-3xl">BTC</p>
                </span>
                <h1 className="font-bold text-3xl lg:text-xl xl:text-3xl pl-1.5 dark:text-white">
                  46.0% ETH: 18.1%
                </h1>
              </div>
            </div>
          </div>
          <div className="">
            <div className="p-9 ml-20 md:ml-16 md:w-80 lg:w-44 xl:w-max lg:-ml-5 lg:mt-5 xl:ml-10 2xl:mr-9">
              <p className="text-xs text-gray-400">ETH GAS Fes</p>
              <div className="inline-flex pt-2">
                <h1 className="font-bold text-3xl lg:text-xl xl:text-3xl dark:text-white"> 87 gwei</h1>
                <svg
                  className="-mr-1 ml-2 h-6 w-6 pt-3 text-gray-400"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
