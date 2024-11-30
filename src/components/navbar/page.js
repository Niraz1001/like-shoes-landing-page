import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-[1275px] mx-auto mt-[12px]">
      <div className="flex h-[72px] items-center justify-between font-poppins text-newgray">
        <div>
          <Image src="/img/brand_logo.png" alt="logo" width={76} height={42} />
        </div>
        <ul className="flex items-center gap-[24px] ">
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Location</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div>
          <button className="py-[6px] px-[16px] bg-[#43009B] text-white">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
