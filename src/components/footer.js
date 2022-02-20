import React from "react";
import FooterLink from "../components/footerLink";

export default function footer() {
  return (
    <div className="w-full py-[64px] md:py-[96px] flex items-center justify-center px-[24px] md:px-[56px]">
      <div className="w-full max-w-[1280px] flex flex-col-reverse md:flex-row justify-between items-start">
        {/* logo section*/}
        <div className="flex flex-col justify-center items-start gap-[24px]">
          <div className="logo-wrapper">
            <img
              className="object-fill w-48"
              src="/assets/companyLogo.svg"
              alt="company logo"
            />
          </div>
          <p className="text-paragraph-sm text-dark-grey w-full max-w-[320px]">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        {/* Links */}
        <div className="mb-[64px] md:mb-[0px] flex flex-col md:flex-row w-full justify-end items-start gap-[0px] md:gap-[64px]">
          <div className="flex flex-col">
            <FooterLink url="/" title="Home" />
            <FooterLink
              url="/cost-and-eligibility"
              title="Cost & Eligibility"
            />
            <FooterLink url="/about-us" title="About Us" />
            <FooterLink url="/faq" title="FAQ" />
          </div>
          {/* <div className="flex flex-col mt-[16px] md:mt-[0px]">
            <FooterLink url="/" title="Email" />
            <FooterLink url="/cost-and-eligibility" title="Location" />
            <FooterLink url="/about-us" title="Phone" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
