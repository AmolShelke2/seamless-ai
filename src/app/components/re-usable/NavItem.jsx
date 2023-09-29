"use client";

import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export const NavItem = ({ itemText, dropDown }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div
      className={`cursor-pointer  flex items-center justify-between
       lg:justify-center gap-1 lg:py-4 py-2 pl-1 pr-6 w-screen lg:w-auto ${
         dropDown ? "border-b-2 " : "border-none"
       }lg:border-none`}
      onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
      <li className="text-[#48484a] capitalize text-[16px]">{itemText}</li>

      {dropDown && (
        <div onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          {isDropDownOpen ? (
            <BiChevronUp size={20} />
          ) : (
            <BiChevronDown size={20} />
          )}
        </div>
      )}
    </div>
  );
};
