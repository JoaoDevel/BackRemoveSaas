import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="pb-10 md:py-20 mx-2">
      {/* Title */}
      <h1 className="mb-12  sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 text-transparent bg-clip-text">
        Remove Background With Hight <br /> Quality and Accuracy
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-lg">
        {/* Background image */}
        <img
          src={assets.image_w_bg}
          alt=""
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
        />

        {/* Foreground image */}
        <img
          src={assets.image_wo_bg}
          alt=""
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          className="absolute   w-full h-full left-0 top-0"
        />

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 w-full z-10 slider"
        />
      </div>
    </div>
  );
};

export default BgSlider;
