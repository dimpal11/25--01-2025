import React from "react";
import Image from "next/image";
import Hand from "@/app/About/Image/handimage.svg";

function Herosection() {
  return (
    <>
      <div>
        <div className=" relative w-full h-64 sm:h-56 md:h-96 lg:h-80 bg-cover bg-center overflow-hidden herobgImage">
          <div className="container mx-auto">
            <div className="relative flex p-2 md:p-4">
              <div className="w-full md:w-1/2 m-auto md:pl-[100px]">
                <p className="text-white Montserrat uppercase font-extrabold text-[20px]">
                  about us
                </p>
                <h4 className=" Montserrat uppercase font-extrabold md:text-[29px] lg:text-[45px] max-w-[320px] lg:max-w-[440px] text-[--text-color]">
                  Lorem ipsum dolor sit amet
                </h4>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center lg:mt-[-15px]">
                <Image src={Hand} className="h-[75%]" alt="logo"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
