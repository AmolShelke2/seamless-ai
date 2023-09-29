import React from "react";

export const Button = ({ innerText, styles }) => {
  return (
    <button
      className={`bg-[#e13019] text-white capitalize py-2 px-6 text-center 
      font-bold text-lg rounded-lg ${styles}`}>
      {innerText}
    </button>
  );
};
