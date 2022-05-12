import React, { useState, useEffect, useLayoutEffect } from "react";
import Mailer from "../components/mailer";
import Footer from "../components/footer";
import useAnalyticsEventTracker from "../components/useAnalyticsEventTracker";
import Swal from "sweetalert2";

function Schedule() {
  const gaEventTracker = useAnalyticsEventTracker("Schedule");

  useEffect(() => {
    if (copiedText === "") {
      return;
    } else {
      navigator.clipboard.writeText(copiedText);
      Swal.fire("Copied to Clipboard!");
    }
  }, [copiedText]);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Title */}
      <div className="w-full max-w-[980px] flex flex-col gap-[24px] items-center justify-center pt-[64px] lg:pt-[96px] mt-[64px] lg:mt-[96px] px-[24px] desktop:px-[0px]">
        <h1 className="lg-display-text font-semibold text-center text-dark">
          Request a Free Consultation
        </h1>
        <p className="text-paragraph font-regular text-center sm:text-center max-w-[640px] text-dark-grey">
          Fill out the form below and our team will get in touch with you to
          schedule your appointment.
        </p>
      </div>

      {/* Content */}
      <div className="w-full py-[64px] lg:py-[96px] flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-[96px] px-[24px] md:px-[56px]">
        {/* Contact info */}
        <div className="w-full max-w-[450px] px-[24px] md:px-[32px] py-[24px] md:py-[64px] bg-light-grey-blue rounded-2xl mt-[96px] lg:mt-[0px]">
          <ul className="w-full h-full flex flex-col gap-[48px] items-stretch justify-between">
            <li className="flex flex-row items-start justify-start gap-[20px] w-full max-w-[450px]">
              <img
                className="mt-[4px]"
                src="./assets/mail.svg"
                alt="icon"
              ></img>
              <div className="flex flex-col items-start justify-center gap-[8px]">
                <h4 className="medium-title-text text-dark font-medium text-left">
                  Email Us
                </h4>
                <p className="text-[18px] text-dark-grey text-left">
                  Our team is here to help.
                </p>
                <a
                  onClick={() => gaEventTracker("Email")}
                  href="mailto:info@sleepwellnewmexico.com"
                  className="text-[18px] text-primary-blue text-left cursor-pointer underline underline-offset-4 sm:no-underline sm:hover:underline"
                >
                  info@sleepwellnewmexico.com
                </a>
              </div>
            </li>
            <li className="flex flex-row items-start justify-start gap-[20px] w-full max-w-[450px]">
              <img
                className="mt-[4px]"
                src="./assets/map-pin.svg"
                alt="icon"
              ></img>
              <div className="flex flex-col items-start justify-center gap-[8px]">
                <h4 className="medium-title-text text-dark font-medium text-left">
                  Visit Us
                </h4>
                <p className="text-[18px] text-dark-grey text-left">
                  Come meet our incredible staff.
                </p>
                <a
                  onClick={() => gaEventTracker("Directions")}
                  href="https://goo.gl/maps/tNgktN2fzX3DTt7m7"
                  target="_blank"
                  className="text-[18px] text-primary-blue text-left max-w-[225px] cursor-pointer underline underline-offset-4 sm:no-underline sm:hover:underline"
                >
                  10411 Lagrima De Oro Rd Albuquerque, NM 87111
                </a>
              </div>
            </li>
            <li className="flex flex-row items-start justify-start gap-[20px] w-full max-w-[450px]">
              <img
                className="mt-[4px]"
                src="./assets/phone.svg"
                alt="icon"
              ></img>
              <div className="flex flex-col items-start justify-center gap-[8px]">
                <h4 className="medium-title-text text-dark font-medium text-left">
                  Call Us
                </h4>
                <p className="text-[18px] text-dark-grey text-left">
                  Mon-Fri from 8am to 5pm.
                </p>
                <a
                  href="tel:+1 (505) 999-9628"
                  onClick={() => gaEventTracker("Call")}
                  className="text-[18px] text-primary-blue text-left cursor-pointer underline underline-offset-4 sm:no-underline sm:hover:underline"
                >
                  +1 (505) 999-9628
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* Input Form */}
        <Mailer />
      </div>
      {/*  */}

      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
}

export default Schedule;
