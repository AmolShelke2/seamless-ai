import React from "react";
import { Button } from "./re-usable/Button";
import Image from "next/image";
import { ImageCard } from "./re-usable/ImageCard";
import { Companies } from "./Companies";

export const HeroSection = () => {
  return (
    <section className="sm:my-14 w-full lg:h-[905px]">
      <div className="px-8 py-8 flex lg:justify-between">
        <div className="lg:w-[566px] lg:h-[572px]">
          <h1
            className="text-[50px] lg:w-[733px] lg:h-[144px] lg:text-[72px] lg:leading-[72px]
         text-black font-bold lg:mb-4">
            The World&apos;s Best{" "}
            <span className="text-[#0065f2]">Sales Leads</span>
          </h1>
          <p
            className="w-full leading-2 lg:w-[620px] lg:h-[150px] 
        text-lg font-normal text-[#48484a] lg:leading-7">
            Our sales software finds verified cell phones, emails, and direct
            dials for anyone you need to sell to. Get 50 free credits with no
            credit card down and discover why 500,000+ companies use Seamless.AI
            to grow their business.
          </p>

          <div className="flex w-full lg:w-[640px] lg:h-[60px] my-4">
            <input
              type="text"
              placeholder="Business Email"
              className="lg:w-[65%] border-2 focus:outline-none focus:border-blue-400 rounded-md px-2 hidden lg:block"
            />
            <div className="w-full lg:w-[35%] flex justify-end items-end">
              <Button innerText={"get started free"} styles={"w-full h-full"} />
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center lg:w-[650px] h-[29px] gap-4">
            <aside className="flex items-center">
              <Image
                src={"/assets/HeroSection/content/credit-card.svg"}
                height={24}
                width={24}
                alt="credit-card"
                className="mr-2"
              />
              <p className="text-xs capitalize">no credit card required</p>
            </aside>
            <p className="text-[#48484a]">|</p>
            <aside className="flex">
              <Image
                src={"/assets/HeroSection/content/stars.svg"}
                height={17}
                width={99}
                alt="stars"
                className="mr-2"
              />
              <p className="text-xs items-center">4.2/5 G2 Rating</p>
            </aside>
          </div>

          <div className="lg:w-[650px]">
            <aside className="lg:w-[650px] flex-col md:flex-row flex justify-between items-center gap-4 my-4">
              <button
                className="lg:w-[50%] w-full h-[46px] rounded-lg text-xl flex gap-2
             justify-center items-center border-2 hover:border-red-400">
                <Image
                  src={"/assets/HeroSection/content/google.svg"}
                  height={20}
                  width={20}
                  alt="google"
                />
                <p className="hover:text-red-400">Sign in with google</p>
              </button>

              <button
                className="lg:w-[50%] w-full h-[46px] rounded-lg text-xl flex gap-2 
            justify-center items-center border-2 hover:border-red-400">
                <Image
                  src={"/assets/HeroSection/content/linkedIn.svg"}
                  height={20}
                  width={20}
                  alt="google"
                />
                <p className="hover:text-red-400">Sign up with linkedin</p>
              </button>
            </aside>

            <p className="text-[#48484a] text-xs text-center">
              By submitting this form, you agree to the Seamless.AI Terms of Use
              & Privacy Policy
            </p>
          </div>
        </div>

        <div
          className="hidden lg:h-[610px] lg:w-[580px] lg:flex flex-col
      justify-start items-start -z-10"
          style={{
            backgroundImage:
              'url("/assets/HeroSection/Image-section/cards-bg.svg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <ImageCard className={"card-animation-fast"} />
          <ImageCard className={"card-animation"} />
          <ImageCard className={"card-animation"} />
          <ImageCard className={"card-animation"} />
        </div>
      </div>

      <div className="w-full mt-16">
        <Companies />
      </div>
    </section>
  );
};
