import Image from "next/image";
import React from "react";
import { InfoReview } from "./re-usable/infosection/InfoReview";
import { Button } from "./re-usable/Button";
import { InfoDescription } from "./re-usable/infosection/InfoDescription";
import { InfoTitle } from "./re-usable/infosection/InfoTitle";
import { InfoHeader } from "./re-usable/infosection/InfoHeader";
import { companies } from "../libs/constants";

export const IntegrationsInformation = () => {
  return (
    <section
      className="w-full h-full lg:h-[650px] py-6 my-24 flex flex-col-reverse px-4
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
        className="h-full w-full lg:w-[718px] ml-4 px-4 -z-10 relative sm:flex flex-col justify-center items-start hidden "
        style={{
          backgroundImage:
            'url("/assets/information/image-section/integration-bg.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        <aside className="grid grid-flow-row grid-cols-3 place-items-center w-full">
          {companies.map((company) => (
            <Image
              key={company.id}
              src={company.image}
              alt="content"
              height={100}
              width={100}
              className="card-animation"
              loading="lazy"
            />
          ))}
        </aside>
      </div>
    </section>
  );
};
