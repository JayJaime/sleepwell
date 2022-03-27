import React, { useState, useEffect, useLayoutEffect } from "react";
import Mailer from "../components/mailer";
import Footer from "../components/footer";
import Swal from "sweetalert2";

function Schedule() {
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });

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
    <div className="flex flex-col justify-center items-center">
      {/* Title */}
      <div className="w-full max-w-[980px] flex flex-col gap-[24px] items-center justify-center pt-[64px] lg:pt-[96px] mt-[64px] lg:mt-[96px] px-[24px] desktop:px-[0px]">
        <h1 className="lg-display-text font-bold text-center text-dark">
          Request a Free Consultation
        </h1>
        <p className="text-paragraph font-regular text-center sm:text-center max-w-[640px] text-dark-grey">
          Fill out the form below and our team will get in touch with you to
          schedule your appointment.
        </p>
      </div>

      {/* Content */}
      <div className="w-full py-[64px] lg:py-[96px] flex flex-col-reverse lg:flex-row items-center justify-center gap-[96px] px-[24px] md:px-[56px]">
        {/* Contact info */}
        <div className="w-full max-w-[450px] px-[24px] md:px-[32px] py-[24px] md:py-[64px] bg-light-grey-blue rounded-2xl">
          <ul className="w-full h-full flex flex-col gap-[48px] items-stretch justify-between">
            <li className="flex flex-row items-start justify-start gap-[20px] w-full max-w-[450px]">
              <img
                className="mt-[4px]"
                src="./assets/mail.svg"
                alt="icon"
              ></img>
              <div className="flex flex-col items-start justify-center gap-[8px]">
                <h4 className="medium-title-text text-dark font-semibold text-left">
                  Email Us
                </h4>
                <p className="text-[18px] text-dark-grey text-left">
                  Our friendly team is here to help.
                </p>
                <p
                  onClick={() => setCopiedText("info@sleepwellnewmexico.com")}
                  className="text-[18px] text-primary-blue text-left cursor-pointer"
                >
                  info@sleepwellnewmexico.com
                </p>
              </div>
            </li>
            <li className="flex flex-row items-start justify-start gap-[20px] w-full max-w-[450px]">
              <img
                className="mt-[4px]"
                src="./assets/map-pin.svg"
                alt="icon"
              ></img>
              <div className="flex flex-col items-start justify-center gap-[8px]">
                <h4 className="medium-title-text text-dark font-semibold text-left">
                  Visit Us
                </h4>
                <p className="text-[18px] text-dark-grey text-left">
                  Come meet our incredible staff.
                </p>
                <p
                  onClick={() =>
                    setCopiedText(
                      "10411 Lagrima De Oro Rd Albuquerque, NM 87111"
                    )
                  }
                  className="text-[18px] text-primary-blue text-left max-w-[225px] cursor-pointer"
                >
                  10411 Lagrima De Oro Rd Albuquerque, NM 87111
                </p>
              </div>
            </li>
            <li className="flex flex-row items-start justify-start gap-[20px] w-full max-w-[450px]">
              <img
                className="mt-[4px]"
                src="./assets/phone.svg"
                alt="icon"
              ></img>
              <div className="flex flex-col items-start justify-center gap-[8px]">
                <h4 className="medium-title-text text-dark font-semibold text-left">
                  Call Us
                </h4>
                <p className="text-[18px] text-dark-grey text-left">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p
                  onClick={() => setCopiedText("+1 (505) 999-9628")}
                  className="text-[18px] text-primary-blue text-left cursor-pointer"
                >
                  +1 (505) 999-9628
                </p>
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
