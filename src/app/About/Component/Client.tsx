"use client";

import React from "react";
import Image from "next/image";
import client from "@/app/About/Image/client.svg";
import Textlogo from "@/app/About/Image/textlogo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import star from "@/app/About/Image/star.svg";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Client = () => {
  return (
    <div className="bg-[--About-bg] py-10 relative ">
      <div className="container mx-auto">
        <div className="bg-[--About-bg] ">
          <div className="mb-5">
            <div className="flex justify-center  whitespace-nowrap items-center mb-3 gap-2 md:gap-4 Montserrat uppercase font-extrabold text-[20px] text-[--text-color] px-3 md:px-0">
              <Image src={Textlogo} alt="logo" />
              Client testimonials
              <Image src={Textlogo} alt="logo" />
            </div>
            <h3 className="Montserrat uppercase font-extrabold text-[24px] md:text-[40px] text-center">
              What People say about us
            </h3>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
        >
          {/* Swiper Slides */}
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-lg transform ">
              <div className="flex items-center space-x-4 mb-4">
                <Image src={client} alt="logo" width={100} />
                <div>
                  <h3 className="font-bold">Fredi Allan</h3>
                  <p className="text-sm text-gray-500">Founder, ABC</p>
                  <div>
                    <Image src={star} alt="star logo"></Image>
                  </div>
                  <p className="text-sm font-bold text-gray-800">
                    "Time and Money Saving"
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* swiper Slides 2*/}
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-lg transform ">
              <div className="flex items-center space-x-4 mb-4">
                <Image src={client} alt="logo" width={100} />
                <div>
                  <h3 className="font-bold">Fredi Allan</h3>
                  <p className="text-sm text-gray-500">Founder, ABC</p>
                  <div>
                    <Image src={star} alt="star logo"></Image>
                  </div>
                  <p className="text-sm font-bold text-gray-800">
                    "Time and Money Saving"
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-lg transform ">
              <div className="flex items-center space-x-4 mb-4">
                <Image src={client} alt="logo" width={100} />
                <div>
                  <h3 className="font-bold">Fredi Allan</h3>
                  <p className="text-sm text-gray-500">Founder, ABC</p>
                  <div>
                    <Image src={star} alt="star logo"></Image>
                  </div>
                  <p className="text-sm font-bold text-gray-800">
                    "Time and Money Saving"
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-lg transform ">
              <div className="flex items-center space-x-4 mb-4">
                <Image src={client} alt="logo" width={100} />
                <div>
                  <h3 className="font-bold">Fredi Allan</h3>
                  <p className="text-sm text-gray-500">Founder, ABC</p>
                  <div>
                    <Image src={star} alt="star logo"></Image>
                  </div>
                  <p className="text-sm font-bold text-gray-800">
                    "Time and Money Saving"
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
