import Image from "next/image";
import React from "react";
import { InfoReview } from "./re-usable/infosection/InfoReview";
import { Button } from "./re-usable/Button";
import { InfoDescription } from "./re-usable/infosection/InfoDescription";
import { InfoTitle } from "./re-usable/infosection/InfoTitle";
import { InfoHeader } from "./re-usable/infosection/InfoHeader";

export const IntegrationsInformation = () => {
  return (
    <section
      className="w-full h-full lg:h-[650px] py-6 my-16 flex flex-col-reverse px-4
    lg:flex-row-reverse justify-between items-center">
      <div className="h-full w-full lg:h-[596px] lg:w-[594px]">
        <InfoHeader header={"INTEGRATIONS"} />
        <InfoTitle title={"Integrate Your Favorite Tools"} />
        <InfoDescription
          description={
            "Integrate directly into your favorite platforms, including Salesforce, Hubspot, Outreach, LinkedIn Sales Navigator, and Salesloft, along with other top CRMs and engagement platforms.."
          }
        />
        <Button
          innerText={"Find an integration"}
          styles={"text-xl w-full md:w-auto"}
        />

        <InfoReview
          reviewText={
            "“Seamless.AI makes it easy to integrate into our current tool stack of LI Sales Nav and Outreach.”"
          }
          reviewWriter={"Zach D, Business Development Representative"}
          reviewWriterImage={"/assets/information/review/review-writer-4.png"}
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
