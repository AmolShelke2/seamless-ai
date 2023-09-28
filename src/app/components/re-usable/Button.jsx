import React from "react";

export const Button = ({ innerText }) => {
  return (
    <button
      className={`bg-[#e13019] text-white capitalize py-2 px-6 text-center font-bold text-lg rounded-xl`}>
      {innerText}
    </button>
  );
};
