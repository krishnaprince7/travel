import React from "react";

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white " id="hero">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src="/images/single.png"
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-8 ">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 2 GB</p>
          </div>
          <button onClick={()=> window.open("https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg==")} className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-[1.1] hover:duration-500">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            src="/images/double.png"
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-8 ">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 2 GB</p>
          </div>
          <button  onClick={()=> window.open("https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg==")} className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-[1.1] hover:duration-500">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src="/images/triple.png"
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-8 ">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 2 GB</p>
          </div>
          <button onClick={()=> window.open("https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg==")} className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-[1.1] hover:duration-500">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
