import React, { useLayoutEffect } from "react";
import CtaSection from "../components/ctaSection";
import ContactInfo from "../components/contactInfo";
import Footer from "../components/footer";
import "./Home.css";

function Cost() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Title */}
      <div className="w-full max-w-[640px] lg:max-w-[980px] flex items-center justify-center pt-[64px] lg:pt-[96px] mt-[64px] lg:mt-[96px] px-[24px] desktop:px-[0px]">
        <h1 className="lg-display-text font-bold text-center text-dark">
          You may qualify for{" "}
          <span className="text-primary-blue">Sleep Well’s</span> oral appliance
          therapy if...
        </h1>
      </div>

      {/* Eligibility Section */}
      <div className="w-full flex items-center justify-center py-[64px] lg:py-[96px] px-[24px] md:px-[56px]">
        {/* checklist */}
        <div className="w-full max-w-[640px] lg:max-w-[1280px] flex flex-col-reverse lg:flex-row items-center justify-between gap-[40px]">
          <div>
            <ul className="flex flex-col gap-[24px]">
              <li className="flex items-start justify-start gap-[16px]">
                <img src="./assets/check-icon.svg" alt="check icon"></img>
                <p className="text-paragraph text-primary-blue font-semibold">
                  You have mild or moderate obstructive sleep apnea.
                </p>
              </li>
              <li className="flex items-start justify-start gap-[16px]">
                <img src="./assets/check-icon.svg" alt="check icon"></img>
                <p className="text-paragraph text-primary-blue font-semibold">
                  You are looking for an alternative to more invasive therapy
                </p>
              </li>
              <li className="flex items-start justify-start gap-[16px]">
                <img src="./assets/check-icon.svg" alt="check icon"></img>
                <p className="text-paragraph text-primary-blue font-semibold">
                  You are unable to use or get consistent benefit from CPAP.
                </p>
              </li>
              {/* <li className="flex items-start justify-start gap-[16px]">
                <img src="./assets/check-icon.svg" alt="check icon"></img>
                <p className="text-paragraph text-primary-blue font-semibold">
                  You are age 18 or above.
                </p>
              </li> */}
            </ul>
          </div>
          {/* image */}
          <div className="max-w-[640px] w-full rounded-xl overflow-hidden max-h-[360px]">
            <img
              className=""
              src="./assets/unsplash.jpg"
              alt="Sleeping people"
            ></img>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-[0px] w-full h-auto bg-white py-[64px] lg:py-[96px] px-[24px] lg:px-[56px] flex flex-col items-center justify-center">
        <div className="w-full max-w-[1280px] flex flex-col items-center lg:items-start justify-center">
          {/* title */}
          <div className="w-full h-auto max-w-[640px] lg:max-w-[850px] pr-[16px] mb-[24px] lg:mb-[48px]">
            <h3 className="title-text font-bold text-left text-dark">
              Payment Options
            </h3>
            {/* <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              Daily personalized fitness, sleep, and recovery data delivered to
              you in real time with Untitled. We’re changing how you move.
            </p> */}
          </div>
          <div className="w-full h-auto max-w-[640px] lg:max-w-[1280px] flex flex-col lg:flex-row items-start justify-between gap-[24px] lg:gap-[64px]">
            {/* list */}
            <div className="w-full h-auto flex flex-col lg:flex-row items-start justify-center gap-[32px] lg:gap-[48px]">
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
                      At Sunshine Dental, we offer several payment plan options
                      to get the care you need without causing financial stress.
                      We proudly accept CareCredit which is a heath credit card
                      that offers many benefits. Typically, CareCredit members
                      can enjoy 0% financing over six months for purchases over
                      $200. This credit care option is available to all
                      individuals, regardless of whether or not you have dental
                      insurance.
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="w-full flex flex-col lg:flex-row justify-start items-center">
                {/* item 2 */}
                <li className="flex flex-col justify-center items-start gap-[20px] w-full lg:max-w-[640px]">
                  {/* <div className="w-[48px] h-[48px] bg-light-grey-blue rounded-3xl flex justify-center items-center">
                    <img src="./assets/clean-icon.svg" alt="icon"></img>
                  </div> */}
                  <div className="flex flex-col gap-[8px]">
                    <h4 className="medium-title-text font-semibold text-left text-dark">
                      Other Payment Methods
                    </h4>
                    <p className="text-paragraph-sm font-regular text-left text-dark-grey">
                      In addition to CareCredit, you can pay for office visits
                      and procedures by cash, credit card, debit card, or check.
                      We also accept most major dental insurances to reduce your
                      cost of service. At Sunshine Dental, we make it easy for
                      you to visit our Albuquerque dentist! Call us at (505)
                      355-2792 to discuss your financial options in greater
                      detail.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* image */}
            {/* <div className="lg:max-w-[500px] w-full max-w-[800px] rounded-xl overflow-hidden max-h-[510px] mt-[48px] lg:mt-[0px]">
              <img
                className=""
                src="./assets/practice-img.jpg"
                alt="Sleeping people"
              ></img>
            </div> */}
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
