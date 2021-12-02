import React from "react";
import { Cards } from "./compoments/Cards";
import { Footer } from "./compoments/Footer";
import { Introduction } from "./compoments/Introduction";
import { Navbar } from "./compoments/Navbar";
function App() {
  return (
    <div className="dark:bg-black 2xl:container 2xl:mx-auto ">
      <Navbar />
      <div className=" relative lg:border-t lg:border-b lg:border-gray-400 lg:border-opacity-25 mt-16">
        <Introduction />
      </div>
      <div className="relative">
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
