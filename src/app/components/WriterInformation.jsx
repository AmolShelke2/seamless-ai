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
        className="h-[650px] w-full lg:w-[718px] ml-4 px-4 relative -z-10"
        style={{
          backgroundImage:
            'url("/assets/information/image-section/writer-bg.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}>
        <div className="relative hidden lg:block">
          <div className="relative">
            <Image
              src={"/assets/information/image-section/writer-1.svg"}
              height={400}
              width={550}
              alt="content"
              className=" absolute top-8 left-14 card-animation"
              loading="lazy"
            />

            <Image
              src={"/assets/information/image-section/writer-2.svg"}
              alt="content"
              height={400}
              width={400}
              className="absolute top-12 right-32 card-animation"
              loading="lazy"
            />
          </div>

          <Image
            src={"/assets/information/image-section/writer-3.svg"}
            height={500}
            width={600}
            alt="content"
            className="absolute top-10 left-8 card-animation"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
