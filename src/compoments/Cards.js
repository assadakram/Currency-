import React from "react";
import { ArrowNarrowDown } from "tabler-icons-react";
import { Star } from "tabler-icons-react";
import { Adjustments } from "tabler-icons-react";
import { CurrencyDetails } from "./CurrencyDetails";

export const Cards = () => {
  return (
    <div>
      <div className=" absolute leftBlurBluemobile"> </div>
      <div className="rightBlurPurplemobile rightBlurPurplelaptop"> </div>
      <div className="fundamentalSecretsmobile fundamentalSecretstablet fundamentalSecretslaptop fundamentalSecretslaptopL fundamentalSecretslaptopO absolute"></div>
      <div>
        <div className=" xl:flex xl:flex-row lg:justify-evenly mx-4 md:mx-11 xl:gap-4 2xl:gap-16 ">
          <div className="md:inline-flex md:gap-14 lg:gap-72 xl:gap-4 2xl:gap-16">
            <div className="relative">
              <div className=" effectBlue mt-12 absolute">1</div>
              <div className=" relative border border-opacity-75 rounded-3xl bg-gray-50 bg-opacity-50 dark:bg-black dark:bg-opacity-75 dark:border-black p-12 mt-14 ">
                <div>
                  <p className=" text-blue-500 text-xl ">
                    <span className="font-bold text-2xl"> Predict </span>
                    <br /> Pricing
                  </p>
                  <div className=" w-52 h-28 pt-1 text-blue-500 text-sm">
                    <p>
                      Use our neural neural network machine learning models to
                      predict and plan according the price of a cryptocurrency
                      token/coin!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className=" effectGreen mt-12 absolute"></div>
              <div className=" relative border border-opacity-75 rounded-3xl  bg-gray-50 bg-opacity-50 dark:bg-black dark:bg-opacity-75 dark:border-black p-12 mt-14">
                <div>
                  <p className="text-green-500 text-xl ">
                    <span className="font-bold text-2xl"> Proprietary </span>
                    <br /> grades
                  </p>
                  <div className=" w-52 h-28 pt-1 text-green-500 text-sm">
                    <p>
                      Learn more about our proprietary Grades by clickling here
                      or swiping one over to the right.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:inline-flex md:gap-14  lg:gap-72 xl:gap-4 2xl:gap-16 ">
            <div className="relative">
              <div className=" effectYellow mt-16 absolute">3</div>
              <div className=" relative border border-opacity-75 rounded-3xl  bg-gray-50 bg-opacity-50 dark:bg-black dark:bg-opacity-75 dark:border-black  p-12 mt-14">
                <div>
                  <p className="text-yellow-500 text-xl ">
                    <span className="font-bold text-2xl"> Grading </span>
                    <br /> system
                  </p>
                  <div className=" w-52 h-28 pt-1 text-yellow-500 text-sm">
                    <p>
                      Multiple Machine Learning Neural Network Models customly
                      built for Cryptocurrency markets, technical analysis, and
                      fundamental analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className=" effectPurple mt-16 absolute">4</div>
              <div className=" relative border border-opacity-75 rounded-3xl  bg-gray-50 bg-opacity-50 dark:bg-black dark:bg-opacity-75 dark:border-black p-12 mt-14">
                <div>
                  <p className="text-purple-500 text-xl ">
                    <span className="font-bold text-2xl"> Universe </span>
                    <br /> of contents
                  </p>
                  <div className=" w-52 h-28 pt-1 text-purple-500 text-sm">
                    <p>
                      Learn about Cryptocurrency decentralized finance (DeFi),
                      blockchain, and even web 3.0 coding if you choose!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-4 md:mx-12 lg:mx-12 2xl:w-max 2xl:mx-7 xl:mx-2  ">
          <div className=" relative border lg:mr-7 xl:ml-7 border-opacity-75 rounded-3xl  bg-gray-50 bg-opacity-50 dark:bg-black dark:bg-opacity-75 dark:border-black py-6 mt-14 ">
            <div className="md:inline-flex md:justify-around m-6 md:m-0 2xl:ml-4 ">
              <p className=" text-lg md:text-lg xl:text-xl font-bold pl-12 family dark:text-gray-300 2xl:pl-28">
                TODAY'S SUMMARY
                <br /> OF CRYPTOCURRENCY
              </p>
              <div className=" md:text-sm pt-7 md:pt-1 md:pl-10 text-blue-900 dark:text-white text-lg family xl:ml-20 2xl:pl-28">
                <p>14 ago</p>
                <p className="text-gray-400 pt-3 text-lg md:text-sm">
                  The global market cap is $2.1T. A decrease of
                  <span className="text-red-500">-11.70% </span> over the last
                  day.
                </p>
              </div>
              <div className="rounded-xl bg-blue-700 w-14 h-14  text-white mt-7 pt-2 pl-2.5 ml-28 md:mr-8 md:mt-2 md:pl-0 lg:pl-2.5 xl:ml-96 ">
                <ArrowNarrowDown size={36} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute mobiletrasparentBack tablettrasparentBack laptoptrasparentBack laptopLtrasparentBack laptopOtrasparentBack border border-opacity-75 rounded-3xl  bg-gray-50 bg-opacity-50 dark:bg-black dark:bg-opacity-75 dark:border-black">
        <div className="p-2 md:p-5">
          <div className="md:flex md:flex-row md:justify-between">
            <p className=" text-lg md:text-2xl font-bold  family dark:text-gray-300 tracking-widest  ">
              TOP 100 CRYPTOCURRENCIES
              <br />
              <span className="text-sm text-gray-400"> BY FUNDAMENTALS </span>
            </p>
            <div className="flex flex-row family text-sm tracking-widest mt-10 dark:text-gray-300">
              <span className="inline-flex mr-2">
                <Star size={18} className="" />
                <p> WATCHLIST</p>
              </span>
              <p className="mr-2"> CATAGEORIES</p>
              <span className="inline-flex">
                <Adjustments size={18} className="" />
                <p> FILTERS</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-72 ml-8 mr-20">
        <div className=" flex flex-col gap-6">
          <CurrencyDetails />
          <CurrencyDetails />
          <CurrencyDetails />
          <CurrencyDetails />
        </div>
      </div>
    </div>
  );
};
