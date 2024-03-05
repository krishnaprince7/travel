import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white" id="test1">
      <div className="flex justify-center items-center  mt-[-60px] w-full h-screen mx-auto  text-center max-w-[800px] flex-col">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANYLATICS
        </p>
        <h1 className="text-4xl md:text-7xl sm:text-6xl">Grow With Data</h1>
        <div className="flex justify-center items-center">
          <p className="text-xl font-bold md:text-5xl sm:text-4xl">
            Fast , flexible financing for
          </p>
          <ReactTyped
            className="text-xl font-bold md:text-5xl sm:text-4xl pl-4"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:2xl text-xl font-bold text-gray-500 py-3 items-center justify-center pl-5">Monitor your data analytics to incress revenue for BTB,BTC,&SASS platforms.</p>
        <button onClick={()=> window.open("https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg==")} className="bg-[#00df9a] rounded-md text-black w-[200px] py-3 my-5 font-medium mx-auto hover:scale-[1.1] hover:duration-500 ">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
