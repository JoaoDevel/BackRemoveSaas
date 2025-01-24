import React from "react";
import { assets } from "../assets/assets.js";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* Left Side */}
      <div>
        <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />{" "}
          <span className="bg-gradient-to-r  from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          <br className="max-md:hidden" /> images for free{" "}
        </h1>
        <p className="my-6 text-[15px] text-gray-500">
          Remove image backgrounds in seconds!
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r  from-violet-600 to-fuchsia-500  hover:scale-105 duration-300 transition-all"
          >
            <img src={assets.upload_btn_icon} alt="" className="w-[20px]" />
            <p className="text-white text-sm">Upload your image</p>
          </label>
        </div>
      </div>

      {/* Right Side */}
      <div className="  max-w-xl">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
