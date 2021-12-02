import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { CurrencyBitcoin } from "tabler-icons-react";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export const CurrencyDetails = () => {
  return (
    <div>
      <div className ="absolute rounded-full border h-16 w-16 flex items-center justify-center border-opacity-5 bg-gray-100 dark:bg-black dark:border-opacity-25 bitCoin " >
				  <div className="absolute rounded-full inset-0 bg-yellow-500 filter blur bg-opacity-25 dark:bg-opacity-25 mt-6"></div>
           <span className=" relative"> <CurrencyBitcoin size={32} strokeWidth={3} color={"#F7931A"} /> </span>
		  </div>
      <div className=" border rounded-3xl w-80  md:w-max text-2xl bg-white dark:bg-black dark:bg-opacity-75 dark:border-black">
        <div className="md:flex md:flex-row m-10">
          <span className="lg:pt-8 pl-14 itemshide ">
            <p className="text-xs text-gray-300 secondFamily">bit coin</p>
            <div className="inline-flex pt-6 ">
              <h1 className="font-bold text-gray-300 lg:text-4xl dark:text-gray-300">
                $ <span className="text-black dark:text-white "> 41.727,50 </span> <sub> BTC </sub>
              </h1>
            </div>
            <span className="text-gray-300">
              <h1 className=" font-bold text-sm dark:text-gray-300 pt-2">
                $ 4,500 USD
              </h1>
            </span>
          </span>
          <span className="pl-20 navBoarhide">
            <ul className="text-sm text-red-500">
              <li><p className="pl-2 ">-11.87%</p></li>
              <li><p className="pl-2 ">-11.62%</p></li>
              <li><p className="pl-2 ">-16.30%</p></li>
              <li><p className="pl-2 ">-11.52%</p></li>
            </ul>
          </span>
          <span className="pl-20 navBarhide">
            <div className="px-12 pt-7">
              <p className="text-xs text-gray-300 pl-0.5 secondFamily">
                24 Volume
              </p>
              <div className="inline-flex pt-2">
                <span className="">
                  <p className=" text-gray-300 text-2xl">%</p>
                </span>
                <h1 className="font-bold text-2xl pl-1.5 dark:text-white">
                  71,932,790,455.19
                </h1>
              </div>
              <p className="text-xs text-gray-300 pl-0.5 pt-6 secondFamily">
                Market Cap
              </p>
              <div className="inline-flex pt-2">
                <span className="">
                  <p className=" text-gray-300 text-2xl">%</p>
                </span>
                <h1 className="font-bold text-2xl pl-1.5 dark:text-white">
                  785,397,635.531
                </h1>
              </div>
            </div>
          </span>
          <span className="lg:pt-7 lg:pr-14 lg:w-72 md:ml-24 ">
            <span>
              <p className="text-xs text-gray-300 secondFamily">Last 7 days</p>
              <ResponsiveContainer width="100%" height="60%">
                <LineChart width={300} height={100} data={data}>
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#51BC60"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </span>
            <span>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                  <div className=" w-2/4 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                </div>
              </div>
              <p className="font-bold text-sm text-gray-300 pt-1">
                18,840,825 BTC
              </p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
