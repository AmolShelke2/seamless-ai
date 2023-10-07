"use client";

import React, { useState } from "react";
import { FaqQuestions } from "../libs/constants";
import { FaqCard } from "./re-usable/FaqCard";

export const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-full h-full xl:w-[1400px] xl:mx-auto xl:h-[735px] px-5 my-24 xl:mt-8 xl:mb-24 pt-5">
      <p className="w-full text-center text-lg text-[#0065f2] font-medium mb-3">
        FAQ
      </p>
      <h2 className="w-full text-center text-black text-[30px] lg:text-[52px] font-bold capitalize">
        frequently asked question
      </h2>

      <div
        className="h-full w-full xl:h-fit bg-white shadow-2xl rounded-xl
       xl:w-[80%] xl:mx-auto pt-5 py-2 border-2 mt-4">
        {FaqQuestions.map((faq) => (
          <FaqCard
            isActive={""}
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    </section>
  );
};
