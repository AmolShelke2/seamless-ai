import Image from "next/image";
import React from "react";

import { companies } from "../libs/constants";

export const Companies = () => {
  return (
    <div className="w-full">
      <h3 className="text-center text-black text-xl font-normal">
        Trusted by 500,000+ users
      </h3>
      <div className="grid lg:grid-cols-6 gap-4 grid-cols-3 place-items-center">
        {companies.map((company) => (
          <Image
            src={company.image}
            alt="user"
            height={150}
            width={150}
            key={company.id}
          />
        ))}
      </div>
    </div>
  );
};
