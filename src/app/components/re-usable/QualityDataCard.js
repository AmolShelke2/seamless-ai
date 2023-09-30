import Image from "next/image";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const QualityDataCard = () => {
  return (
    <div
      className="w-full lg:w-[803px] h-full sm:h-[613px] py-10 px-9 bg-white rounded-2xl mt-8 
          card-animation">
      <Image
        src={"/assets/businesses/business-1.svg"}
        height={90}
        width={300}
        alt="business company"
        className="mb-8 sm:mb-4"
      />

      <h2
        className="lg:h-[240px] font-semibold text-3xl leading-[50px] lg:text-[52px] 
            lg:leading-[60px] text-black text-left mb-4">
        $0-5M in 3 months is not only possible, {""}
        <span className="text-[#0065F2]">
          I can now say that $5-20M is staring us in the face.
        </span>
      </h2>
      <p className="lg:text-xl lg:leading-7 mb-4">
        <b>Steve Schmidt</b>, Chief Revenue Officer
      </p>

      <div className="hidden w-full h-[106px] sm:grid grid-cols-3 gap-4 mt-4 mb-4">
        <div className="border-r-2">
          <h3 className="text-[48px] text-left font-bold text-[#1aac06]">
            $6.8M
          </h3>
          <span className="text-lg text-[#48484a] capitalize">
            Pipeline genreated
          </span>
        </div>
        <div className="border-r-2">
          <h3 className="text-[48px] text-left font-bold text-[#1aac06]">
            $100k
          </h3>
          <span className="text-lg text-[#48484a] capitalize">
            Generated in 60 days
          </span>
        </div>
        <div>
          <h3 className="text-[48px] text-left font-bold text-[#1aac06]">42</h3>
          <span className="text-lg text-[#48484a]">New Appointments</span>
        </div>
      </div>

      <p
        className="text-[#e13019] text-xl font-semibold 
            cursor-pointer inline-flex items-center">
        Get The Full Story{" "}
        <span className="ml-2">
          <BsFillArrowRightCircleFill className="text-[#e13019]" size={18} />
        </span>
      </p>
    </div>
  );
};
