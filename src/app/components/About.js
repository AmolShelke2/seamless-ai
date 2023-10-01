import React from "react";
import { Button } from "./re-usable/Button";
import { aboutInfo } from "../libs/constants";

export const About = () => {
  return (
    <section className="w-full h-full lg:h-[700px] my-10 py-5 lg:my-16 lg:py-10">
      <div className="mx-auto lg:w-[1040px] px-2 py-2 lg:mb-12">
        <h2 className="text-center sm:h-[120px] text-3xl lg:text-[52px] lg:leading-[60px] text-black font-bold mb-8">
          The First and Only Real-Time Search Engine for B2B Sales Leads
        </h2>
        <p className="text-center text-lg sm:text-xl sm:leading-8 text-[#48484a] sm:h-[100px]">
          Seamless.AI’s search engine helps you connect directly with your ideal
          customers so you can build pipeline, shorten your sales cycle, and
          close more deals at scale. Leverage our real-time people search engine
          to build a massive list of decision-makers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 px-4 my-8 place-items-center">
        {aboutInfo.map((about) => (
          <div
            key={about.id}
            className="w-full sm:w-[445px] h-[275px] shadow-2xl rounded-2xl px-5
                 py-10 flex flex-col justify-center items-center">
            <h3 className="text-[#0065f2] text-[52px] font-bold h-[90px] w-full text-center">
              {about.title}
            </h3>
            <p className="text-[#48484a] w-full text-center leading-8 h-[68px] text-xl">
              {about.info}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center px-6">
        <Button
          innerText={"get started today"}
          styles={"text-center w-full sm:w-auto"}
        />
      </div>
    </section>
  );
};
