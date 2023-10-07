import React from "react";
import { BiChevronDown } from "react-icons/bi";

export const FaqCard = ({ id, question, answer, activeId, setActiveId }) => {
  const isActive = id === activeId;

  const toggleIsActive = () => {
    setActiveId(isActive ? null : id);
  };

  return (
    <div className="relative">
      <div
        className="h-[90px] w-full flex items-center justify-between border-b-2 px-4 my-2 relative transition-all duration-1000"
        onClick={toggleIsActive}>
        <p className="text-black text-xl font-medium xl:font-semibold cursor-pointer hover:text-blue-500">
          {question}
        </p>

        <BiChevronDown
          size={30}
          className="cursor-pointer"
          onClick={toggleIsActive}
        />
      </div>

      <div
        className={`h-fit transition-all duration-150 ${
          isActive ? "block card-animation-fast" : "hidden"
        } `}>
        <p className="text-[16px] px-4">{answer}</p>
      </div>
    </div>
  );
};
