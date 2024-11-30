import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-[90px]  flex justify-center h-[calc(100vh-182px)]" >
        <div className="w-1/2">
          <h1 className="font-poppins font-extrabold text-[108px] leading-[102px]">YOUR FEET DESERVE THE BEST</h1>
          <p className="mt-[36px] font-poppins font-semibold text-[16px] w-[404px]">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="flex gap-[40px] mt-[36px]">
            <button className="py-[6px] px-[16px] bg-[#43009B] text-white font-poppins">Shop Now</button>
            <button className="py-[6px] px-[16px] border-[1px] border-black font-poppins">Category</button>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src="/img/shoe_image.png"
            alt="heroimg"
            width={596}
            height={547}
          />
        </div>
      </div>
    </>
  );
};

export default Herosection;
