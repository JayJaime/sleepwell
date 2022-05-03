import React from "react";
import "../pages/Home.css";
import { NavLink as ButtonLink } from "react-router-dom";

export default function ctaSection() {
  const Reload = () => {
    window.location.assign("/schedule");
  };

  return (
    <div className="mt-[24px] w-full lg:h-[700px] bg-hero2 flex justify-center items-center min-h-[700px] relative">
      <div className="w-full flex flex-col justify-center items-center gap-[24px]">
        <div className="w-full flex flex-col justify-center items-center md:p-[32px]">
          <h1 className="lg-display-text font-semibold text-center text-white px-[24px]">
            Get The Sleep You Deserve
          </h1>
          <p className="text-paragraph font-regular text-center sm:text-center max-w-[920px] text-light-blue p-[24px]">
            Meet with our team and see if oral appliance therapy is right for
            you.
          </p>
        </div>
        <ButtonLink
          onClick={Reload}
          to="/schedule"
          type="button"
          className="w-auto w-[310px] h-[62px] rounded-full transition ease-in-out px-[24px] pt-4 pb-4 bg-white text-primary-blue hover:bg-light-grey transition ease-in-out duration-300 active:scale-90 flex justify-center items-center"
        >
          <h4 className=" text-[20px] font-bold text-center">
            Request Free Consultation
          </h4>
        </ButtonLink>
      </div>

      <div class="custom-shape-divider-top-cta">
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

      <div class="custom-shape-divider-bottom-cta">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
