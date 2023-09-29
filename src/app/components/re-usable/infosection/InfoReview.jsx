import Image from "next/image";
import React from "react";

export const InfoReview = ({ reviewText, reviewWriter, reviewWriterImage }) => {
  return (
    <aside
      className="lg:w-[564px] lg:h-[131px] border-t-2 mt-16 
    flex justify-end items-end text-start gap-4 py-6">
      <div className="rounded-full h-[70px] w-[70px]">
        <Image
          src={reviewWriterImage}
          height={160}
          width={160}
          alt="review-writer"
        />
      </div>

      <div className="">
        <p className="lg:w-[464px] lg:h-[40px] text-[#48484a] font-normal lg:leading-5">
          {reviewText}
        </p>
        <h4 className="lg:w-[464px] lg:h-[20px] text-black font-bold lg:leading-5 mt-4">
          {reviewWriter}
        </h4>
      </div>
    </aside>
  );
};
