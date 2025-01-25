"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Correct Import
import "swiper/css";
import Image from "next/image";
import Linkedin from "@/app/About/Image/linkedin_logo.svg.svg";

const Linked = () => {
  return (
    <>
      <div className="bg-[--text-color] py-10 px-3 flex justify-center items-center w-full">
        <div className="container mx-auto">
          <Swiper
            slidesPerView={6} // Default for larger screens
            spaceBetween={5}
            loop={true}
            autoplay={{
              delay: 2000, // Adjust delay as needed
              disableOnInteraction: false,
            }}
            modules={[Autoplay]} // Add Autoplay module
            breakpoints={{
              320: {
                slidesPerView: 2, // For mobile
              },
              768: {
                slidesPerView: 4, // For tablet
              },
              1024: {
                slidesPerView: 6, // For desktop
              },
            }}
          >
            {/* 1 */}
            <SwiperSlide>
              <Image src={Linkedin} alt="logo" width={100} />
            </SwiperSlide>

            {/* 2 */}
            <SwiperSlide>
              <Image src={Linkedin} alt="logo" width={100} />
            </SwiperSlide>

            {/* 3 */}
            <SwiperSlide>
              <Image src={Linkedin} alt="logo" width={100} />
            </SwiperSlide>

            {/* 4 */}
            <SwiperSlide>
              <Image src={Linkedin} alt="logo" width={100} />
            </SwiperSlide>

            {/* 5 */}
            <SwiperSlide>
              <Image src={Linkedin} alt="logo" width={100} />
            </SwiperSlide>

            {/* 6 */}
            <SwiperSlide>
              <Image src={Linkedin} alt="logo" width={100} />
            </SwiperSlide>

            {/* 7 */}
            <SwiperSlide>
              <Image src={Linkedin} alt="logo" width={100} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Linked;
