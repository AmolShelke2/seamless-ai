import Image from "next/image";
import React from "react";
import { Button } from "./re-usable/Button";

export const FreeCredits = () => {
  return (
    <section
      className="w-full h-full xl:w-[1400px] xl:mx-auto xl:h-[685px]
       px-5 flex flex-col-reverse md:flex-row 2xl:justify-between my-10">
      <div className="w-full md:w-[600px] h-[403px] md:px-4 my-auto">
        <h2
          className="text-[38px] leading-[50px] md:text-[64px] md:leading-[68px] 
        text-start text-black font-bold mb-2">
          How About 50 Free Credits?
        </h2>
        <p className="text-lg text-[#48484a] leading-8 mb-4">
          Don’t wait until you run out of sales leads. Try Seamless.AI for free
          today and find your next big opportunity.
        </p>

        <div className="flex flex-col md:flex-row w-full lg:w-[550px] lg:h-[78px] my-4">
          <input
            type="text"
            placeholder="Business Email"
            className="w-full md:w-[60%] border-2 focus:outline-none 
            focus:border-blue-400 rounded-md px-2 py-4 mb-2 md:mb-0"
          />
          <div className="w-full md:w-[40%] flex justify-end items-end">
            <Button innerText={"get started free"} styles={"w-full h-full"} />
          </div>
        </div>

        <p className="text-[#48484a] text-[12px] text-left">
          By submitting this form, you agree to the Seamless.AI Terms of Use &
          Privacy Policy
        </p>

        <div className="flex items-center gap-8 mt-4">
          <p className="inline-flex gap-3">
            <Image
              src={"/assets/circleCheckIcon.svg"}
              height={20}
              width={20}
              alt="circlecheck"
            />
            Immidiate Access
          </p>
          <p className="inline-flex gap-3">
            <Image
              src={"/assets/circleCheckIcon.svg"}
              height={20}
              width={20}
              alt="circlecheck"
            />
            No Credit Card Required
          </p>
        </div>
      </div>

      <div className="">
        <Image
          src={"/assets/free-credit-bg.png"}
          height={600}
          width={600}
          alt="image"
          className="h-full w-full xl:w-auto xl:h-auto"
        />
      </div>
    </section>
  );
};
