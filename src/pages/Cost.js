import React, { useState, useEffect, useLayoutEffect } from "react";
import CtaSection from "../components/ctaSection";
import ContactInfo from "../components/contactInfo";
import Footer from "../components/footer";
import Swal from "sweetalert2";
import "./Home.css";

function Cost() {
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
      {/* Eligibility Section */}
      <div className="w-full flex items-center justify-center pt-[116px] pb-[32px] px-[24px] md:px-[56px]">
        {/* checklist */}
        <div className="w-full max-w-[640px] lg:max-w-[1280px] flex flex-col lg:flex-row items-center justify-between lg:gap-[40px]">
          <div>
            <h1 className="lg-display-text font-semibold text-left text-dark mb-[32px] md:mb-[64px]">
              You may be eligible for{" "}
              <span className="inline-block">oral appliance</span> therapy if...
            </h1>
            <ul className="flex flex-col gap-[24px] md:gap-[40px]">
              <li className="flex items-start justify-start gap-[16px]">
                <img src="./assets/check-icon.svg" alt="check icon"></img>
                <p className="text-paragraph text-primary-blue font-semibold">
                  You have mild or moderate obstructive sleep apnea.
                </p>
              </li>
              <li className="flex items-start justify-start gap-[16px]">
                <img src="./assets/check-icon.svg" alt="check icon"></img>
                <p className="text-paragraph text-primary-blue font-semibold">
                  You are looking for an alternative to more invasive therapy.
                </p>
              </li>
              <li className="flex items-start justify-start gap-[16px]">
                <img src="./assets/check-icon.svg" alt="check icon"></img>
                <p className="text-paragraph text-primary-blue font-semibold">
                  You are unable to use or benefit from CPAP.
                </p>
              </li>
            </ul>
          </div>
          {/* image */}
          <div className="w-full mt-[64px] lg:mt-[0px] md:max-w-[500px] overflow-hidden">
            <img
              className=""
              src="./assets/man-using-cpap.png"
              alt="Sleeping people"
            ></img>
          </div>
        </div>
      </div>

      {/* Cost Section */}
      <div className="mt-[0px] w-full h-auto bg-light-grey-blue py-[116px] px-[24px] lg:px-[56px] flex flex-col items-center justify-center relative">
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row-reverse items-center gap-[0px] lg:gap-[40px] lg:items-center justify-center">
          <div className="w-full flex flex-col items-center lg:items-start justify-center">
            {/* title */}
            <div className="w-full h-auto max-w-[640px] lg:max-w-[850px] pr-[16px] mb-[24px] lg:mb-[48px]">
              <h3 className="title-text font-semibold text-left text-dark">
                How Much Does It Cost?
              </h3>
              <p className="text-paragraph text-left mt-[20px] text-dark-grey">
                We work very hard to make the financial process as easy as
                possible, and so work closely with a variety of financing
                companies to ensure you can get the treatment you need. The cost
                will vary depending on your treatment plan.
              </p>
            </div>
            <div className="w-full h-auto max-w-[640px] lg:max-w-[1280px] flex flex-col lg:flex-row items-start justify-between gap-[24px] lg:gap-[64px]"></div>
          </div>
          {/* image */}
          <div className="lg:max-w-[500px] w-full max-w-[640px] rounded-xl overflow-hidden max-h-[510px] mt-[48px] lg:mt-[0px]">
            <img
              className="object-fit"
              src="./assets/holding-appliance.png"
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

      {/* Payments Section */}
      <div className="mt-[0px] w-full h-auto bg-white py-[64px] lg:py-[96px] px-[24px] lg:px-[56px] flex flex-col items-center justify-center">
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center gap-[0px] lg:gap-[40px] lg:items-center justify-center">
          <div className="w-full flex flex-col items-center lg:items-start justify-center">
            {/* title */}
            <div className="w-full h-auto max-w-[640px] lg:max-w-[850px] pr-[16px] mb-[24px] lg:mb-[48px]">
              <h3 className="title-text font-semibold text-left text-dark">
                Payment Options
              </h3>
              {/* <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              Daily personalized fitness, sleep, and recovery data delivered to
              you in real time with Untitled. We’re changing how you move.
            </p> */}
            </div>
            <div className="w-full h-auto max-w-[640px] lg:max-w-[1280px] flex flex-col lg:flex-row items-start justify-between gap-[24px] lg:gap-[64px]">
              {/* list */}
              <div className="w-full h-auto flex flex-col lg:flex-col items-start justify-center gap-[32px] lg:gap-[48px]">
                <ul className="w-full flex flex-col lg:flex-row justify-start items-center">
                  {/* item 1 */}
                  <li className="flex flex-col justify-center items-start gap-[20px] w-full lg:max-w-[640px]">
                    {/* <div className="w-[48px] h-[48px] bg-light-grey-blue rounded-3xl flex justify-center items-center">
                    <img src="./assets/comfort-icon.svg" alt="icon"></img>
                  </div> */}
                    <div className="flex flex-col gap-[8px]">
                      <h4 className="medium-title-text font-semibold text-left text-dark">
                        We Accept Care Credit
                      </h4>
                      <p className="text-paragraph-sm font-regular text-left text-dark-grey">
                        At Sleep Well New Mexico, we offer several payment plan
                        options to help you get the sleep you need with causing
                        any financial stress. We offer CareCredit to our
                        patients, a health credit card that offers plenty of
                        benefits and is available to everybody, whether or not
                        you have insurance.
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="w-full flex flex-col lg:flex-row justify-start items-center">
                  {/* item 2 */}
                  <li className="flex flex-col justify-center items-start gap-[20px] w-full lg:max-w-[640px]">
                    <div className="flex flex-col gap-[8px]">
                      <h4 className="medium-title-text font-semibold text-left text-dark">
                        Other Payment Methods
                      </h4>
                      <p className="text-paragraph-sm font-regular text-left text-dark-grey">
                        In addition to using CareCredit, you also have the
                        option to pay for office visits by cash, credit card,
                        debit card, or check. At Sleep Well New Mexico we ensure
                        its simple and easy for you to get treatment for your
                        sleep apnea. Call us at{" "}
                        <span
                          onClick={() => setCopiedText("+1 (505) 999-9628")}
                          className="text-primary-blue cursor-pointer"
                        >
                          (505) 999-9628
                        </span>{" "}
                        to learn more about our financial options.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="lg:max-w-[500px] w-full max-w-[640px] rounded-xl overflow-hidden max-h-[510px] mt-[48px] lg:mt-[0px]">
            <img
              className="object-fit"
              src="./assets/payment-options-img.png"
              alt="Sleeping people"
            ></img>
          </div>
        </div>
      </div>

      {/* Second CTA Section */}
      <CtaSection />

      {/* Contact info section */}
      <ContactInfo />

      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
}

export default Cost;
