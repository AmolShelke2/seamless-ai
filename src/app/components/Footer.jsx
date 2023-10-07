import Image from "next/image";
import React from "react";
import { footerIcons, footerLinks } from "../libs/constants";

export const Footer = () => {
  return (
    <footer
      className="w-full h-full xl:w-[1400px] xl:mx-auto xl:h-[440px] flex
       flex-col flex-wrap justify-between py-6 -mx-4 border-b-2 gap-8 sm:gap-2 mt-20">
      <div className="w-full xl:h-full xl:w-[34%] px-4 block">
        <div className="flex flex-col justify-between h-full px-4 sm:px-0">
          <div className="block">
            <Image
              src={"/assets/logo.svg"}
              alt="footer logo"
              height={60}
              width={60}
              className="mb-4"
            />

            <p className="text-[50px] font-bold leading-[60px]">
              The World’s Best Sales Leads
            </p>
          </div>
          <div className="w-full block">
            <span className="text-black font-medium text-xl">
              Connect with Us
            </span>
            <p className="text-lg text-black hover:text-red-500 font-medium mb-2">
              +1 949 984 8984
            </p>

            <div className="flex gap-4">
              {footerIcons.map((link) => (
                <Image
                  key={link.id}
                  src={link.icon}
                  height={20}
                  width={20}
                  alt="icon"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-full flex flex-col gap-4 xl:flex-row justify-start xl:justify-between
       flex-wrap xl:w-[64%] py-2 px-8 sm:px-4">
        {footerLinks.map((link) => (
          <div key={link.title} className="block">
            <h4 className="font-bold text-black text-2xl mb-5 capitalize">
              {link.title}
            </h4>
            {link.subTitle?.map((sub) => (
              <p
                key={sub.id}
                className="text-gray-500 text-md font-normal my-2 cursor-pointer capitalize">
                {sub.title}
              </p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
