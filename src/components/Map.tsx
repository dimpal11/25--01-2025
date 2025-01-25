import React from "react";
// import Image from "next/image";
// import Phone from "@/Image/phone.svg";
// import email from "@/Image/email.svg";
// import map from "@/Image/map.svg";

function Map() {
  return (
    <>
      {/* Map Section */}
      <div className="bg-[--bg-body]">
        <div className=" relative bg-[#273252] mx-4 lg:mx-10 py-8">
          {/* <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
          OUR LOCATION
        </h2> */}
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between md:space-y-8 lg:space-y-0">
              <div>
                <h3 className="text-white md:max-w-72 lg:max-w-96 font-extrabold Montserrat text-[26px] md:text-[30px] lg:text-[48px] leading-9 md:leading-[60px]">
                  Have an amazing Start Let’s talk
                </h3>
                <button className="text-white font-bold text-font14 bg-[--bg-color] rounded Inter mt-5 md:mt-10 h-[45px] w-[120px]">
                  GET STARTED
                </button>
              </div>
              {/* Map */}
              <div className="md:w-1/2 lg:w-2/3 h-96 flex items-center rounded-lg overflow-hidden ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345096643!2d144.9631576156405!3d-37.81410797975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777d57b14c7d0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1614319327620!5m2!1sen!2sau"
                  width="100%"
                  height="80%"
                  style={{ border: 0 }}
                  //   allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
