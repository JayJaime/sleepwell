import React, { useState, useEffect } from "react";
import "../pages/Home.css";

export default function careCreditPreQualify() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-light-grey-blue px-[24px] py-[140px] relative">
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-[48px]">
        <div className="flex flex-col items-start justify-between">
          <h3 className="title-text font-semibold text-left text-dark w-full max-w-[640px] mb-[20px]">
            See if You Pre-Qualify for Special Financing
          </h3>
          <p className="text-paragraph font-regular text-left text-dark-grey w-full max-w-[640px]">
            The appliances small size makes it easy to travel with, ensuring you
            can get a good night of sleep no matter where you go.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-[40px] gap-[32px] px-[0px]">
            <a
              to="/schedule"
              type="button"
              className="w-auto h-[62px] rounded-full transition ease-in-out pl-6 pr-6 pt-4 pb-4 bg-primary-blue text-white hover:bg-primary-blue-hover transition ease-in-out duration-300 active:scale-90 flex justify-center items-center"
            >
              <h4 className=" text-[20px] font-bold text-center">
                Pre-Qualify Now
              </h4>
            </a>
          </div>
        </div>
        {/* image */}
        <div className="w-full max-w-[500px] rounded-xl overflow-hidden">
          <img
            className="object-fit"
            src="./assets/ccCard.png"
            alt="Sleeping people"
          ></img>
        </div>
      </div>

      <div class="custom-shape-divider-top-cost">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div class="custom-shape-divider-bottom-cost">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
