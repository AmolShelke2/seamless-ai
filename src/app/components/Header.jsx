import Image from "next/image";
import React from "react";
import { Button } from "./re-usable/Button";

export const Header = () => {
  return (
    <header className="w-full pt-3 px-6 flex justify-between items-center sticky top-2">
      <div className="flex items-center gap-1 cursor-pointer w-[65%]">
        <div className="flex justify-center items-center mr-8 gap-1">
          <Image
            src={"/assets/logo.svg"}
            height={30}
            width={30}
            alt="seamless ai"
          />
          <h1 className="text-2xl font-bold text-[#0065f2]">Seamless.AI</h1>
        </div>
        <ul className="flex justify-between gap-8">
          <li>Products</li>
          <li>Customers</li>
          <li>Company</li>
          <li>Pricing</li>
        </ul>
      </div>

      <div className="flex items-center justify-between w-[30%]">
        <p className="cursor-pointer hover:text-[#e13019] text-lg">Login</p>
        <button
          className="rounded-xl text-[#e13019] py-2 px-4 font-bold transition-all duration-150
        text-lg border border-red-400 hover:bg-[#e13019] hover:text-white">
          Get a Demo
        </button>
        <Button innerText={"get started free"} />
      </div>
    </header>
  );
};
