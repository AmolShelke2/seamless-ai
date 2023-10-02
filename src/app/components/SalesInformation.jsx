"use client";

import React from "react";
import { InfoTitle } from "./re-usable/infosection/InfoTitle";
import { InfoHeader } from "./re-usable/infosection/InfoHeader";
import { InfoDescription } from "./re-usable/infosection/InfoDescription";
import { Button } from "./re-usable/Button";
import { InfoReview } from "./re-usable/infosection/InfoReview";
import Image from "next/image";

import { useInView } from "react-intersection-observer";

export const SalesInformation = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      className="w-full h-full lg:h-[650px] py-6 my-16 flex flex-col-reverse px-4
  lg:flex-row justify-between items-center">
      <div className="h-full w-full lg:h-[596px] lg:w-[594px]">
        <InfoHeader header={"SALES PROSPECTING SOLUTION"} />
        <InfoTitle title={"Get in Front of the Right Sales Prospects"} />
        <InfoDescription
          description={
            "Spend more time selling, and less time building sales prospecting lists. Use our sales software to build accurate leads lists, find the right people to contact, and crush quota!"
          }
        />
        <Button
          innerText={"Try for free"}
          styles={"text-xl w-full md:w-auto"}
        />

        <InfoReview
          reviewText={
            "“The connectivity with my CRM and Linkedin Navigator makes the tool easy to use.“"
          }
          reviewWriter={"Mathew H, Opportunity Creator"}
          reviewWriterImage={"/assets/information/review/review-writer-1.png"}
        />
      </div>

      <div
        className="hidden lg:block h-full w-full lg:h-[650px] lg:w-[718px] ml-4 px-4 relative -z-10"
        style={{
          backgroundImage:
            'url("/assets/information/image-section/information-1.bg.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        <Image
          src={"/assets/information/image-section/content-5-image.svg"}
          alt="content"
          height={400}
          width={400}
          ref={ref}
          className={`absolute top-8 right-64 ${
            isInView ? "card-animation-fast" : ""
          }`}
          loading="lazy"
        />

        <div className="relative block">
          <Image
            src={"/assets/information/image-section/content-1-image.svg"}
            height={400}
            width={500}
            alt="content"
            className={`absolute top-4 left-20 ${
              isInView ? "card-animation-1" : ""
            }`}
            loading="lazy"
          />
          <Image
            src={"/assets/information/image-section/content-2-image.svg"}
            height={400}
            width={500}
            alt="content"
            className={`absolute top-5 left-20 ${
              isInView ? "card-animation-2" : ""
            }`}
            loading="lazy"
          />
          <Image
            src={"/assets/information/image-section/content-3-image.svg"}
            height={400}
            width={500}
            alt="content"
            className={`absolute top-5 left-20 ${
              isInView ? "card-animation-3" : ""
            }`}
            loading="lazy"
          />
          <Image
            src={"/assets/information/image-section/content-4-image.svg"}
            height={400}
            width={500}
            alt="content"
            className={`absolute top-5 left-20 ${
              isInView ? "card-animation" : ""
            }`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
