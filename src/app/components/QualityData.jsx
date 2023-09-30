import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { QualityDataCard } from "./re-usable/QualityDataCard";

export const QualityData = () => {
  return (
    <div className="quality-data w-full py-16 my-16">
      <div className="w-full lg:w-[1400px] lg:mx-auto lg:h-[703px] px-5 lg:px-10">
        <h2
          className="w-full text-center lg:text-[52px] text-2xl
        lg:leading-[60px] font-bold text-white">
          Quality Data Creates Profitable Business
        </h2>

        <aside className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 lg:px-20">
          <QualityDataCard />

          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-8 py-8">
            <div className="w-fit lg:w-[325px] h-[260px] px-5 py-9 bg-white rounded-2xl flex flex-col">
              <Image
                src={"/assets/businesses/business-2.svg"}
                height={50}
                width={150}
                alt="business company"
                className="mb-8 sm:mb-4"
              />
              <h3 className="text-[32px] lg:text-[48px] text-left font-bold text-[#1aac06]">
                300%
              </h3>
              <span className="text-lg text-[#48484a]">of their Quota</span>

              <p
                className="text-[#e13019] text-xl font-semibold 
               cursor-pointer inline-flex items-center mt-4">
                See How
                <span className="ml-2">
                  <BsFillArrowRightCircleFill
                    className="text-[#e13019]"
                    size={18}
                  />
                </span>
              </p>
            </div>
            <div className="w-fit lg:w-[325px] h-[260px] px-5 py-9 bg-white rounded-2xl flex flex-col">
              <Image
                src={"/assets/businesses/business-3.svg"}
                height={50}
                width={150}
                alt="business company"
                className="mb-8 sm:mb-4"
              />
              <h3 className="text-[32px] lg:text-[48px] text-left font-bold text-[#1aac06]">
                40 - 50
              </h3>
              <span className="text-md lg:text-lg text-[#48484a]">
                Appointments Booked Weekly
              </span>

              <p
                className="text-[#e13019] text-xl font-semibold 
               cursor-pointer inline-flex items-center mt-4">
                See How
                <span className="ml-4">
                  <BsFillArrowRightCircleFill
                    className="text-[#e13019]"
                    size={20}
                  />
                </span>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
