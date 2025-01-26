import React from "react";
import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="min-h-[80vh] text-center mb-10 pt-14">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 text-transparent bg-clip-text mb-6 sm:mb-10">
        Choose the plan thats right for you
      </h1>

      <div className="flex flex-wrap gap-6 justify-center text-start">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white  drop-shadow-sm  rounded-lg px-8 py-12 mt-12 text-gray-700 hover:scale-105 transition-all duration-300"
          >
            <img width={40} src={assets.logo_icon} />
            <p className="mt-3 font-semibold text-gray-800">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className=" text-3xl font-medium">${item.price}</span>/{" "}
              {item.credits} credits
            </p>
            <button className="bg-gray-800 w-full text-white mt-8 text-sm rounded-md py-2.5 min-w-52">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
