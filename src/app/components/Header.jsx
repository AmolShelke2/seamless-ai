"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./re-usable/Button";
import { NavItem } from "./re-usable/NavItem";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <header className="w-full pt-3 px-2 lg:px-6 flex justify-between items-center sticky top-0">
      <div className="flex items-center gap-1 cursor-pointer w-auto lg:w-[65%]">
        <div className="flex justify-center items-center mr-8 gap-1 relative">
          <Image
            src={"/assets/logo.svg"}
            height={30}
            width={30}
            alt="seamless ai"
          />
          <h1 className="text-2xl font-bold text-[#0065f2] hidden sm:block">
            Seamless.AI
          </h1>
        </div>

        <ul
          className={`lg:justify-between absolute ${
            isNavActive
              ? "top-16 lg:top-0 shadow-md h-screen lg:h-auto lg:shadow-none bg-slate-100 lg:bg-white"
              : "top-[-300px] lg:top-0"
          }
        lg:static lg:top-0 flex flex-col lg:flex-row
        transition-all duration-700`}>
          <NavItem itemText={"Products"} dropDown={true} />
          <NavItem itemText={"Customers"} dropDown={true} />
          <NavItem itemText={"Company"} dropDown={true} />
          <NavItem itemText={"Pricing"} dropDown={false} />
        </ul>
      </div>

      <div className="flex gap-1 items-center justify-between w-auto lg:w-[30%] relative">
        <p className="cursor-pointer hover:text-[#e13019] text-lg hidden lg:block">
          Login
        </p>
        <button
          className="rounded-xl text-[#e13019] py-2 px-4 font-bold transition-all duration-150
        text-lg border border-red-400 hover:bg-[#e13019] hover:text-white hidden lg:block">
          Get a Demo
        </button>

        <Button innerText={"get started free"} styles={""} />

        <div className="ml-3 cursor-pointer">
          <AiOutlineMenu
            size={20}
            className="hover:text-[#e13019] lg:hidden"
            onClick={() => setIsNavActive(!isNavActive)}
          />
        </div>
      </div>
    </header>
  );
};
