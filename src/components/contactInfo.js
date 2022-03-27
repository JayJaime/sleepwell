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
    <div className="w-full flex items-center justify-center bg-dark px-[24px] py-[40px]">
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
              <p
                onClick={() => setCopiedText("info@sleepwellnewmexico.com")}
                className="text-paragraph-sm text-light-blue text-left cursor-pointer"
              >
                info@sleepwellnewmexico.com
              </p>
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
              <p
                onClick={() =>
                  setCopiedText("10411 Lagrima De Oro Rd Albuquerque, NM 87111")
                }
                className="text-paragraph-sm text-light-blue text-left cursor-pointer"
              >
                10411 Lagrima De Oro Rd
              </p>
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
              <p
                onClick={() => setCopiedText("+1 (505) 999-9628")}
                className="text-paragraph-sm text-light-blue text-left cursor-pointer"
              >
                +1 (505) 999-9628
              </p>
              <p className="text-paragraph-sm text-light-blue opacity-60 text-left">
                Mon-Fri from 8am to 5pm.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
