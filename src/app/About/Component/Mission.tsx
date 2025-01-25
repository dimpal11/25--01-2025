import React from "react";
import Image from "next/image";
import Textlogo from "@/app/About/Image/textlogo.svg";
import mission1 from "@/app/About/Image/mission1.svg";
import mission2 from "@/app/About/Image/mission2.svg";
import mission3 from "@/app/About/Image/mission3.svg";

function Mission() {
  return (
    <>
      {/* <!-- Mission and How Our Services Work --> */}
      <div className="bg-[--bg-body] relative">
        <section className="py-6">
          <div className="text-center mb-8 ">
            <div className="flex justify-center items-center mb-3 gap-4 Montserrat uppercase font-extrabold text-[20px] text-[--text-color]">
              <Image src={Textlogo} alt="logo" />
              Mission
              <Image src={Textlogo} alt="logo"></Image>
            </div>
            <h1 className="Montserrat uppercase font-extrabold  md:text-[40px]">
              How Our Services Work
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 text-[16px] lg:px-24 container mx-auto">
            {/* <!-- Service 1 --> */}
            <div className="text-center">
              <Image src={mission1} alt="logo" />
              <div className="relative flex justify-center items-center ">
                <h1 className="Montserrat text-[36px] font-extrabold text-[--bg-body] bg-[--bg-color] w-[72px] mt-[-40px] border-[4px] border-[--bg-body] rounded-lg p-2">
                  01
                </h1>
              </div>
              <h3 className="uppercase font-extrabold text-[24px] md:text-[18px] Montserrat text-[--bg-color] mt-2 whitespace-nowrap">
                Connect with Us
              </h3>
              <p className="text-[20px] font-normal Montserrat text-center">
                Continue indulged speaking the was out horrible for domestic
                position. Seeing rather her you not esteem men settle genius
                excuse.
              </p>
            </div>
            {/* <!-- Service 2 --> */}
            <div className="text-center">
              <Image src={mission2} alt="logo" />
              <div className="relative flex justify-center items-center ">
                <h1 className="Montserrat text-[36px] font-extrabold text-[--bg-body] bg-[--bg-color] w-[72px] mt-[-40px] border-[4px] border-[--bg-body] rounded-lg p-2">
                  02
                </h1>
              </div>
              <h3 className="uppercase font-extrabold text-[24px] md:text-[18px] Montserrat text-[--bg-color] mt-2 whitespace-nowrap">
                Seamless Support
              </h3>
              <p className="text-[20px] font-normal Montserrat text-center">
                Continue indulged speaking the was out horrible for domestic
                position. Seeing rather her you not esteem men settle genius
                excuse.
              </p>
            </div>
            {/* <!-- Service 3 --> */}
            <div className="text-center">
              <Image src={mission3} alt="logo" />
              <div className="relative flex justify-center items-center ">
                <h1 className="Montserrat text-[36px] font-extrabold text-[--bg-body] bg-[--bg-color] w-[72px] mt-[-40px] border-[4px] border-[--bg-body] rounded-lg p-2">
                  03
                </h1>
              </div>
              <h3 className="uppercase font-extrabold md:text-[18px] text-[24px] Montserrat text-[--bg-color] mt-2 whitespace-nowrap">
                Meeting Client
              </h3>
              <p className="text-[20px] font-normal Montserrat text-center">
                Continue indulged speaking the was out horrible for domestic
                position. Seeing rather her you not esteem men settle genius
                excuse.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Mission;
