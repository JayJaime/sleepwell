import React from "react";
import { NavLink as ButtonLink } from "react-router-dom";

export default function ctaSection() {
  const Reload = () => {
    window.location.assign("/schedule");
  };

  return (
    <div className="mt-[24px] w-full lg:h-[574px] bg-hero2 flex justify-center items-center min-h-[600px]">
      <div className="w-full flex flex-col justify-center items-center gap-[24px] mb-[80px] lg:mb-[64px] mt-[48px] lg:mt-0">
        <div className="w-full flex flex-col justify-center items-center md:p-[32px]">
          <h1 className="lg-display-text font-bold text-center text-white px-[24px]">
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
          className="w-auto min-w-[200px] rounded-full transition ease-in-out px-[24px] pt-4 pb-4 bg-white text-primary-blue hover:bg-light-grey transition ease-in-out duration-300 active:scale-90 flex justify-center items-center"
        >
          <h4 className=" text-[20px] font-bold text-center">
            Request Free Consultation
          </h4>
        </ButtonLink>
      </div>
    </div>
  );
}
