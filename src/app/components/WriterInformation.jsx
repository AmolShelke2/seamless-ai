import Image from "next/image";
import React from "react";
import { InfoReview } from "./re-usable/infosection/InfoReview";
import { Button } from "./re-usable/Button";
import { InfoDescription } from "./re-usable/infosection/InfoDescription";
import { InfoTitle } from "./re-usable/infosection/InfoTitle";
import { InfoHeader } from "./re-usable/infosection/InfoHeader";

export const WriterInformation = () => {
  return (
    <section
      className="w-full h-full lg:h-[650px] py-6 my-16 flex flex-col-reverse px-4
  lg:flex-row justify-between items-center">
      <div className="h-full w-full lg:h-[596px] lg:w-[594px]">
        <InfoHeader header={"WRITER"} />
        <InfoTitle title={"Solve Writer’s Block For Good"} />
        <InfoDescription
          description={
            "In a world of generic copywriting tools, Writer by Seamless.AI is specially designed to help you confidently execute sales and marketing messaging, from value propositions to upsell emails."
          }
        />
        <Button
          innerText={"Explore Writer"}
          styles={"text-xl w-full md:w-auto"}
        />

        <InfoReview
          reviewText={
            "“Seamless.AI puts the best of all worlds together in one easy-to-use platform.”"
          }
          reviewWriter={"Judy C, Sales Leader"}
          reviewWriterImage={"/assets/information/review/review-writer-3.png"}
        />
      </div>

      <div
        className="h-[650px] w-full lg:w-[718px] ml-4 px-4 relative"
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
          className="absolute top-0 right-24 card-animation"
          loading="lazy"
        />

        <div className="relative hidden lg:block">
          <div className="relative">
            <Image
              src={"/assets/information/image-section/chrome-extension-1.svg"}
              height={400}
              width={550}
              alt="content"
              className=" absolute top-4 left-20 card-animation"
              loading="lazy"
            />
          </div>

          <Image
            src={"/assets/information/image-section/chrome-extension-4.svg"}
            height={400}
            width={500}
            alt="content"
            className="absolute top-0 left-0 card-animation"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
