import React from "react";
import Image from "next/image";
import footer from "@/Image/footer.svg";
import footericon from "@/Image/footericon.svg";

function Footer() {
  return (
    <>
      <div className="bg-[--bg-body]">
        <div className="flex flex-wrap md:flex-nowrap justify-between mx-auto px-4 lg:px-10 pt-5 container space-y-6 md:space-y-0 ">
          {/* Left side */}
          <div className="p-[10px] lg:p-[20px] flex flex-col items-center md:items-start w-full md:w-1/2">
            <div className="w-[200px] lg:w-[264px] pt-[18px] pr-[18px] pb-[18px]">
              <Image src={footer} alt="logo"></Image>
            </div>
            <p className="text-justify font-normal max-w-[456px] mt-4 md:mt-0 Montserrat text-font16">
              Lorem ipsum dolor sit amet consectetur. Tristique sociis nunc amet
              erat. Aenean magna lectus viverra eros nullam at ac. Et auctor
              massa tellus vestibulum. Posuere facilisis sed nunc elementum
              condimentum sed ultrices. Feugiat ultrices eu risus.
            </p>
          </div>

          {/* Right side */}
          <div className="p-[20px] lg:p-[40px] flex flex-col items-center md:items-end w-full md:w-1/2">
            <div className="md:p-3">
              <h3 className="text-[20px] md:text-[26px] Inter text-center md:text-right font-black uppercase md:mb-8 lg:mb-0 lg:text-[42px]">
                Subscribe Our Latest Newsletter
              </h3>
              <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 w-full justify-center md:justify-end md:mb-[34px] lg:mb-[26px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full md:w-2/3 outline-none lg:w-auto text-sm font-medium pl-4 py-2 border border-gray-300 text-[#372011]"
                />
                <button
                  type="submit"
                  className="bg-[--bg-color] uppercase text-font14 font-bold w-full md:w-auto px-6 py-2 text-white"
                >
                  Subscribe
                </button>
              </form>

              <div className="flex justify-center md:justify-end mt-4">
                <Image src={footericon} alt="logo"></Image>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="p-[40px]">
          <div className="pt-[18px]">
            <h3 className="text-[32px] text-right max-w-96 font-black uppercase mb-5">
              Subscribe Our letest Newsletter
            </h3>
            <form className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0   justify-end">
              <input
                type="email"
                placeholder="Email"
                className="w-full md:w-2/3 text-sm font-medium pl-2 py-2 border border-gray-300  text-[#372011] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-[#FE434C] uppercase text-sm font-medium w-full md:w-auto px-6 py-2 text-white  hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>

            <div className="flex justify-end mt-4">
              <Image src={footericon} alt="logo"></Image>
            </div>
          </div>
        </div> */}
        {/* </div>/ */}

        <div className="border-t border-gray-300 my-4"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto px-4 lg:px-20 py-5 container space-y-4 lg:space-y-0">
          {/* left side */}
          <div className="text-center lg:text-left">
            <p className="text-[--footer-text] text-font16 font-normal Outfit">
              ©2025 All Rights Reserved a registered trademark.{" "}
            </p>
          </div>
          {/* right side */}
          <p className="Outfit text-font16 font-normal">
            <span className="text-[--text-color]"> Privacy</span> | Terms |
            Legal{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
