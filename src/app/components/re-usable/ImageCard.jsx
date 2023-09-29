import Image from "next/image";
import React from "react";

export const ImageCard = ({ className }) => {
  return (
    <div className={`relative h-[100px] mb-4 ${className}`}>
      <Image
        src={"/assets/HeroSection/Image-section/image-card-1.svg"}
        height={50}
        width={550}
        alt="card1"
        className="relative"
      />
      <Image
        src={"/assets/HeroSection/Image-section/image-card-1-profile.png"}
        height={100}
        width={500}
        alt="profile"
        className="absolute top-4 left-4"
      />
    </div>
  );
};
