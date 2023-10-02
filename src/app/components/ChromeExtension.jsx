"use client";

import React from "react";
import { InfoHeader } from "./re-usable/infosection/InfoHeader";
import { InfoTitle } from "./re-usable/infosection/InfoTitle";
import { InfoDescription } from "./re-usable/infosection/InfoDescription";
import { Button } from "./re-usable/Button";
import { InfoReview } from "./re-usable/infosection/InfoReview";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const ChromeExtension = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      className="w-full h-full lg:h-[650px] py-6 my-16 flex flex-col-reverse px-4
    lg:flex-row-reverse justify-between items-center">
      <div className="h-full w-full lg:h-[596px] lg:w-[594px]">
        <InfoHeader header={"CHROME EXTENSION"} />
        <InfoTitle title={"Prospect Less, Close More"} />
        <InfoDescription
          description={
            "Batman has his Utility Belt. And salespeople have the Seamless.AI Chrome Extension. Use it to find phone numbers and emails and turn your Chrome browser into the ultimate sales utility belt."
          }
        />
        <Button
          innerText={"add to chrome -it's free"}
          styles={"text-xl w-full md:w-auto"}
        />

        <InfoReview
          reviewText={
            "“The connectivity with my CRM and Linkedin Navigator makes the tool easy to use.“"
          }
          reviewWriter={"Mathew H, Opportunity Creator"}
          reviewWriterImage={"/assets/information/review/review-writer-2.png"}
        />
      </div>

      <div
        className="hidden lg:block lg:h-[650px] w-full lg:w-[718px] ml-4 px-4 relative -z-10"
        style={{
          backgroundImage:
            'url("/assets/information/image-section/information-2.bg.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        <Image
          src={"/assets/information/image-section/chrome-extension-3.svg"}
          alt="content"
          height={400}
          width={400}
          ref={ref}
          className={`absolute top-0 right-24 ${
            isInView ? "card-animation-fast" : ""
          }`}
          loading="lazy"
        />

        <div className="relative hidden lg:block">
          <div className="relative">
            <Image
              src={"/assets/information/image-section/chrome-extension-1.svg"}
              height={400}
              width={550}
              alt="content"
              ref={ref}
              className={`absolute top-4 left-20 ${
                isInView ? "card-animation-2" : ""
              }`}
              loading="lazy"
            />
          </div>

          <Image
            src={"/assets/information/image-section/chrome-extension-4.svg"}
            height={400}
            width={500}
            alt="content"
            ref={ref}
            className={`absolute top-0 left-0 ${
              isInView ? "card-animation" : ""
            }`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
