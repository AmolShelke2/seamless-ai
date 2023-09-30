import React from "react";
import { InfoTitle } from "./re-usable/infosection/InfoTitle";
import { InfoDescription } from "./re-usable/infosection/InfoDescription";
import Image from "next/image";

export const GrowthInformation = () => {
  return (
    <section
      className="w-full h-full lg:h-[331px] 
    flex flex-col-reverse lg:flex-row justify-between my-14 lg:my-28 py-4 gap-8 px-4">
      <div>
        <InfoTitle title={"The Leader In Sales Intelligence"} />
        <InfoDescription
          description={
            "G2 consistently ranks our sales intelligence software as a top 100 sales platform. In fact, out of 100,000+ software products reviewed on G2, Seamless.AI was named a Top 100 Highest Satisfaction Software Product for 2022."
          }
        />
      </div>

      <div className="w-full lg:w-[716px] grid h-full grid-cols-3 place-items-center">
        <Image
          src={"/assets/information/image-section/growth-image-1.svg"}
          height={180}
          width={200}
          alt="growth"
        />
        <Image
          src={"/assets/information/image-section/growth-image-2.svg"}
          height={300}
          width={200}
          alt="growth"
          className="h-fit"
        />
        <Image
          src={"/assets/information/image-section/growth-image-3.svg"}
          height={180}
          width={200}
          alt="growth"
        />
      </div>
    </section>
  );
};
