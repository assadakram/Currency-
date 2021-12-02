import React from "react";
import { BrandFacebook } from "tabler-icons-react";
import { BrandYoutube } from "tabler-icons-react";
import { BrandInstagram } from "tabler-icons-react";
import { BrandTelegram } from "tabler-icons-react";
import { BrandDiscord } from "tabler-icons-react";
import { AccessPoint } from "tabler-icons-react";

export const Footer = () => {
  return (
    <div>
      <div className="text-center pt-32 ">
        <p className=" text-xl md:text-4xl lg:text-5xl font-bold  family text-white dark:text-gray-100 relative tracking-widest ">
          FUNDAMENTALS SECRETS
        </p>
        <p className=" text-3xl font-bold  family text-white relative tracking-widest pt-8 ">
          <span className="footercolor">NEWSLETTER </span>STATERT KIT
        </p>
        <p className="text-md text-white relative pt-8">
          Get free key content and insights <br /> into cryptocurrency
          investing.
        </p>
        <div class="pt-20 h-56">
          <input
            type="text"
            placeholder="Email Address"
            className="
        
      px-3
      py-3
      placeholder-gray-400
      text-gray-600
      relative
      bg-white 
      dark:bg-black
      rounded-xl
      text-base
      border border-gray-400
      outline-none
      focus:outline-none focus:ring
      lg:w-96
    "
          />
          <button
            className="
     relative
    bg-purple-500
    text-white
    active:bg-purple-600
    font-bold
    text-base
    lg:px-16
    lg:py-4
    py-4
    px-2
    rounded-xl
    shadow-md
    hover:shadow-lg
    outline-none
    focus:outline-none
    mr-1
    mb-1
    -ml-9
    gradient
  "
            type="button"
          >
            Subscribe now
          </button>
        </div>
      </div>
      <div className="bg-white dark:bg-black dark:text-gray-300 relative  ">
        <div className=" md:flex md:flex-row  justify-between border-b border-gray-400 lg:mt-16 lg:mx-24 lg:py-10 lg:pt-3 h-48  p-4 ">
          <div>
            <div className="flex flex-row ">
              <a href="/" className="pt-2 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-9 w-9"
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
                  Fundamental <br />
                  <span className="pb-1 font-normal">Secrets </span>
                </p>
              </div>
              <div className="ml-10 md:hidden">
                <p className="font-bold w-28   "> Follow Us</p>
                <div className="inline-flex pt-6 ">
                  <BrandYoutube className="" />
                  <BrandFacebook className="" />
                  <BrandInstagram className="" />
                  <BrandTelegram className="" />
                  <BrandDiscord />
                  <AccessPoint />
                </div>
              </div>
            </div>
            <p className="font-bold w-28 pt-6 navBoarhide ">
              Your gateway to the universe investments.
            </p>
          </div>
          <p className="lg:px-24 lg:py-7 md:hidden py-7 text-xs ">
            © 2021. Fundamental Secrets LLC. All rights reserved.
          </p>
          <div className="itemshide">
            <p className="font-bold w-28 "> Products</p>
            <p className=" w-28 pt-6 ">Course Live Classes Crypto Indices</p>
          </div>
          <div className="itemshide">
            <p className="font-bold w-28 "> Company</p>
            <p className=" w-28 pt-6">
              About US Terms of Use Privacy Policy Careers
            </p>
          </div>
          <div className="itemshide">
            <p className="font-bold w-28 "> Supports</p>
            <p className=" w-28 pt-6">FAQ Contact Us</p>
          </div>
          <div className="itemshide">
            <p className="font-bold w-28  "> Follow Us</p>
            <div className="inline-flex pt-6 ">
              <BrandYoutube className="" />
              <BrandFacebook className="" />
              <BrandInstagram className="" />
              <BrandTelegram className="" />
              <BrandDiscord />
              <AccessPoint />
            </div>
          </div>
        </div>
        <p className="lg:px-24 lg:py-7 itemshide ">
          © 2021. Fundamental Secrets LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
};
