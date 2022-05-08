import React, { useState, useEffect } from "react";
import "../pages/Home.css";
import Swal from "sweetalert2";

export default function ContactInfo() {
  const [copiedText, setCopiedText] = useState("");

  useEffect(() => {
    if (copiedText === "") {
      return;
    } else {
      navigator.clipboard.writeText(copiedText);
      Swal.fire("Copied to Clipboard!");
    }
  }, [copiedText]);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-darkest-blue px-[24px] py-[40px]">
      <div className="w-full max-w-[1280px]">
        <ul className="w-full h-full flex flex-wrap items-stretch justify-between gap-[48px]">
          <li className="flex flex-row items-center justify-start gap-[20px] w-full max-w-[350px]">
            <div className="w-[48px] h-[48px] bg-primary-blue flex items-center justify-center rounded-full">
              <img
                className="mt-[0px] opacity-80"
                src="./assets/mail-white.svg"
                alt="icon"
              ></img>
            </div>
            <div className="flex flex-col items-start justify-center gap-[4px]">
              {/* <h4 className="medium-title-text text-dark font-semibold text-left">
                Email Us
              </h4> */}
              <a
                href="mailto:info@sleepwellnewmexico.com"
                className="text-paragraph-sm text-light-blue text-left cursor-pointer underline underline-offset-4 sm:no-underline sm:hover:underline"
              >
                info@sleepwellnewmexico.com
              </a>
              <p className="text-paragraph-sm text-light-blue opacity-60 text-left">
                Our team is here to help.
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center justify-start gap-[20px] w-full max-w-[350px]">
            <div className="w-[48px] h-[48px] bg-primary-blue flex items-center justify-center rounded-full">
              <img
                className="mt-[0px] opacity-80"
                src="./assets/map-pin-white.svg"
                alt="icon"
              ></img>
            </div>
            <div className="flex flex-col items-start justify-center gap-[4px]">
              {/* <h4 className="medium-title-text text-dark font-semibold text-left">
                Visit Us
              </h4> */}
              <a
                href="https://goo.gl/maps/tNgktN2fzX3DTt7m7"
                target="_blank"
                className="text-paragraph-sm text-light-blue text-left cursor-pointer underline underline-offset-4 sm:no-underline sm:hover:underline"
              >
                10411 Lagrima De Oro Rd
              </a>
              <p className="text-paragraph-sm text-light-blue opacity-60 text-left max-w-[225px]">
                Albuquerque, NM 87111
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center justify-start gap-[20px] w-full max-w-[350px]">
            <div className="w-[48px] h-[48px] bg-primary-blue flex items-center justify-center rounded-full">
              <img
                className="mt-[0px] opacity-80"
                src="./assets/phone-white.svg"
                alt="icon"
              ></img>
            </div>
            <div className="flex flex-col items-start justify-center gap-[4px]">
              {/* <h4 className="medium-title-text text-dark font-semibold text-left">
                Call Us
              </h4> */}
              <a
                href="tel:+1 (505) 999-9628"
                className="text-paragraph-sm text-light-blue text-left cursor-pointer underline underline-offset-4 sm:no-underline sm:hover:underline"
              >
                +1 (505) 999-9628
              </a>
              <p className="text-paragraph-sm text-light-blue opacity-60 text-left">
                Mon-Fri from 8am to 5pm.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* new */}
      {/* <div className="w-full max-w-[1280px] bg-white py-[24px] px-[16px] rounded-md">
        <ul className="w-full h-full flex flex-wrap items-stretch justify-around gap-[48px]">
          <li className="flex flex-row items-center justify-start gap-[20px] w-full max-w-[350px]">
            <div className="w-[48px] h-[48px] bg-primary-blue flex items-center justify-center rounded-full">
              <img
                className="mt-[0px] opacity-80"
                src="./assets/mail-white.svg"
                alt="icon"
              ></img>
            </div>
            <div className="flex flex-col items-start justify-center gap-[4px]">
              <p className="text-paragraph-sm text-dark text-left cursor-pointer font-semibold">
                Email
              </p>
              <p className="text-paragraph-sm text-primary-blue text-left">
                info@sleepwellnewmexico.com
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center justify-start gap-[20px] w-full max-w-[350px]">
            <div className="w-[48px] h-[48px] bg-primary-blue flex items-center justify-center rounded-full">
              <img
                className="mt-[0px] opacity-80"
                src="./assets/map-pin-white.svg"
                alt="icon"
              ></img>
            </div>
            <div className="flex flex-col items-start justify-center gap-[4px]">
              <p className="text-paragraph-sm text-dark text-left cursor-pointer font-semibold">
                Location
              </p>
              <p className="text-paragraph-sm text-primary-blue text-left">
                10411 Lagrima De Oro Rd
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center justify-start gap-[20px] w-full max-w-[350px] ">
            <div className="w-[48px] h-[48px] bg-primary-blue flex items-center justify-center rounded-full">
              <img
                className="mt-[0px] opacity-80"
                src="./assets/phone-white.svg"
                alt="icon"
              ></img>
            </div>
            <div className="flex flex-col items-start justify-center gap-[4px]">
              <p className="text-paragraph-sm text-dark font-semibold text-left cursor-pointer">
                Phone
              </p>
              <p className="text-paragraph-sm text-primary-blue text-left">
                +1 (505) 999-9628
              </p>
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
