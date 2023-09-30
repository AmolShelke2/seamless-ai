import React from "react";
import { BiChevronDown } from "react-icons/bi";

export const FaqCard = ({ question }) => {
  return (
    <div className="h-[70px] w-full flex items-center justify-between border-b-2 px-4 my-2">
      <p className="text-black text-xl font-medium xl:font-semibold cursor-pointer hover:text-blue-500">
        {question}
      </p>
      <BiChevronDown size={30} className="cursor-pointer" />
    </div>
  );
};
