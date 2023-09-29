import React from "react";

export const InfoDescription = ({ description }) => {
  return (
    <p className="md:w-[564px] md:h-[128px] text-lg leading-8 mt-4 mb-2 text-[#48484a] font-normal">
      {description}
    </p>
  );
};
