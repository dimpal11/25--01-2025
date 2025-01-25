import React from "react";
import Image from "next/image";
import textlogo from "@/app/About/Image/textlogo.svg";
import meet1 from "@/app/About/Image/meet1.svg";
import meet2 from "@/app/About/Image/meet2.svg";
import meet3 from "@/app/About/Image/meet3.svg";

function Meet() {
  return (
    <>
      {/* <!-- Meet Our Experts --> */}
      <div className="bg-[--bg-body]">
        <section className=" py-12">
          <div className="text-center mb-8">
            <div className="flex gap-3 uppercase font-extrabold text-[20px] Montserrat justify-center items-center text-[--text-color] mb-3 container mx-auto">
              <Image src={textlogo} alt="logo" />
              Our Expert Team
              <Image src={textlogo} alt="logo" />
            </div>
            <h1 className="md:text-[48px] text-[24px] uppercase font-extrabold Montserrat">
              Meet Our Experts
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12 lg:px-24 container mx-auto">
            {/* <!-- Expert 1 --> */}
            <div className="text-center">
              <Image src={meet1} alt="logo"></Image>
              <div className="bg-[--bg-color] p-2 xl:w-full xl:max-w-[400px]">
                <h3 className="text-white font-extrabold text-[20px] Montserrat text-left pl-4">
                  John Owen
                </h3>
                <p className="font-normal text-white text-[14px] text-left pl-4">
                  CEO & Founder
                </p>
              </div>
            </div>
            {/* <!-- Expert 2 --> */}
            <div className="text-center">
              <Image src={meet2} alt="logo"></Image>
              <div className="bg-[--bg-color] p-2 xl:w-full xl:max-w-[398px]">
                <h3 className="text-white font-extrabold text-[20px] Montserrat text-left pl-4">
                  John Owen
                </h3>
                <p className="font-normal text-white text-[14px] text-left pl-4">
                  CEO & Founder
                </p>
              </div>
            </div>
            {/* <!-- Expert 3 --> */}
            <div className="text-center">
              <Image src={meet3} alt="logo"></Image>
              <div className="bg-[--bg-color] p-2 xl:w-full xl:max-w-[398px]">
                <h3 className="text-white font-extrabold text-[20px] Montserrat text-left pl-4">
                  John Owen
                </h3>
                <p className="font-normal text-white text-[14px] text-left pl-4">
                  CEO & Founder
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Meet;
