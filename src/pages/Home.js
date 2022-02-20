import React, { useLayoutEffect } from "react";
import { NavLink as ButtonLink } from "react-router-dom";
import Quote from "../components/quote";
import Stat from "../components/stat";
import CtaSection from "../components/ctaSection";
import ContactInfo from "../components/contactInfo";
import Footer from "../components/footer";
import "./Home.css";

function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const listOfReviews = [
    {
      quote:
        '"Love the simplicity of the service and the prompt customer support. We can’t imagine working without it."',
      name: "Lyle Kauffman",
      video:
        "https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0",
      image: "./assets/unsplash.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Hero Section */}
      {/* <div className="static xl:mt-[112px] mt-[80px] lg:mx-8 w-full max-w-[1280px] lg:h-[574px] xl:rounded-3xl bg-hero flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-[24px] mb-[80px] lg:mb-[40px] mt-[48px] lg:mt-0">
          <div className="w-full flex flex-col justify-center items-center gap-[24px] md:p-[32px] p-[16px]">
            <h1 className="text-large-display font-bold text-center text-white max-w-[850px]">
              No Mask. <span className="inline-block">No Surgery.</span>{" "}
              <span className="inline-block text-light-blue">Sleep Well.</span>
            </h1>
            <p className="text-paragraph font-regular text-center sm:text-center max-w-[920px] text-light-blue">
              We provide a simple, and efficient treatment option for
              obstructive sleep apnea, with custom-made oral appliances that fit
              like a retainer and keep you sound asleep.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[32px] px-[24px]">
            <ButtonLink
              to="/schedule"
              type="button"
              className="w-auto min-w-[200px] rounded-full transition ease-in-out px-[24px] pt-4 pb-4 bg-white text-primary-blue hover:bg-light-grey transition ease-in-out duration-300 active:scale-90 flex justify-center items-center"
            >
              <h4 className=" text-[20px] font-bold text-center">
                Schedule Free Consultation
              </h4>
            </ButtonLink>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <div className="w-full flex flex-col justify-center items-center gap-[64px] py-[64px] lg:py-[96px] mt-[64px] lg:mt-[64px] px-[24px] md:px-[56px]">
        <div className="w-full flex flex-col justify-center items-center gap-[24px]">
          <div className="w-full flex flex-col justify-center items-center gap-[24px] md:p-[32px] p-[16px]">
            <h1 className="text-large-display font-bold text-center text-dark max-w-[850px]">
              No Mask. <span className="inline-block">No Surgery.</span>{" "}
              <span className="inline-block text-primary-blue">
                Sleep Well.
              </span>
            </h1>
            <p className="text-paragraph font-regular text-center sm:text-center max-w-[920px] text-dark-grey">
              We provide a simple, and efficient treatment option for
              obstructive sleep apnea, with custom-made oral appliances that fit
              like a retainer and keep you sound asleep.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[32px] px-[0px]">
            <ButtonLink
              to="/schedule"
              type="button"
              className="w-auto min-w-[200px] rounded-full transition ease-in-out px-[24px] pt-4 pb-4 bg-primary-blue text-white hover:bg-primary-blue-hover transition ease-in-out duration-300 active:scale-90 flex justify-center items-center"
            >
              <h4 className=" text-[20px] font-bold text-center">
                Request Free Consultation
              </h4>
            </ButtonLink>
          </div>
        </div>
        {/* image section */}
        <div className="rounded-xl overflow-hidden max-h-[516px] max-w-[1280px]">
          <img
            className="object-fill"
            src="./assets/somnox.jpg"
            alt="office"
          ></img>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-[24px] w-full py-[64px] lg:py-[96px] flex items-center justify-center px-[24px] md:px-[56px]">
        <div className="max-w-[1280px] w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-[40px]">
          {/* video */}
          <div className="aspect-video overflow-hidden rounded-xl max-w-[640px] w-full">
            <iframe
              title="Video Review"
              src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
              className="embed-container"
              width="640px"
              height="360px"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          {/* text section */}
          <div className="w-full max-w-[640px] h-full flex flex-col items-start justify-between gap-[24px]">
            <h3 className="title-text font-bold text-left text-dark">
              How Treatment With{" "}
              <span className="text-primary-blue inline-block">Sleep Well</span>{" "}
              Works
            </h3>
            <p className="text-paragraph text-primary-blue font-semibold">
              Inspire is an alternative to CPAP that works inside your body
              while you sleep. It’s a small device placed during a same-day,
              outpatient procedure.
            </p>
            <p className="text-paragraph text-dark-grey">
              Inspire is an alternative to CPAP that works inside your body
              while you sleep. It’s a small device placed during a same-day,
              outpatient procedure.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-[0px] w-full h-auto bg-white py-[64px] lg:py-[96px] px-[24px] lg:px-[56px] flex flex-col items-center justify-center">
        <div className="w-full max-w-[1280px] flex flex-col items-center lg:items-start justify-center">
          {/* title */}
          <div className="w-full h-auto max-w-[640px] lg:max-w-[850px] pr-[16px] mb-[64px] ">
            <h3 className="title-text font-bold text-left text-dark">
              Benefits to Oral Appliance Therapy
            </h3>
            <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              The custom made appliance positions the jaw forward while you
              sleep, providing people with mild to moderate sleep apnea a more
              peaceful night.
            </p>
          </div>
          <div className="w-full h-auto max-w-[640px] lg:max-w-[1280px] flex flex-col lg:flex-row items-center justify-between gap-[24px] lg:gap-[64px]">
            {/* list */}
            <div className="w-full h-auto">
              <ul className="w-full flex flex-col lg:flex-row justify-start items-center gap-[48px] desktop:gap-[32px] ">
                {/* item 1 */}
                <li className="flex flex-col justify-center items-start gap-[20px] w-full lg:max-w-[400px]">
                  <div className="w-[48px] h-[48px] bg-light-grey-blue rounded-3xl flex justify-center items-center">
                    <img src="./assets/comfort-icon.svg" alt="icon"></img>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h4 className="medium-title-text font-semibold text-left text-dark">
                      Comfortable to Wear
                    </h4>
                    <p className="text-paragraph-sm font-regular text-left text-dark-grey">
                      The oral appliance fits like a retainer, negating much of
                      the negative experiences associated with CPAP.
                    </p>
                  </div>
                </li>
                {/* item 2 */}
                <li className="flex flex-col justify-center items-start gap-[20px] w-full lg:max-w-[400px]">
                  <div className="w-[48px] h-[48px] bg-light-grey-blue rounded-3xl flex justify-center items-center">
                    <img src="./assets/travel-icon.svg" alt="icon"></img>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h4 className="medium-title-text font-semibold text-left text-dark">
                      Portable & Convenient
                    </h4>
                    <p className="text-paragraph-sm font-regular text-left text-dark-grey">
                      The appliances small size makes it easy to travel with,
                      ensuring you can get a good night of sleep no matter where
                      you go.
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="w-full mt-[64px] flex flex-col lg:flex-row justify-start items-center gap-[48px] desktop:gap-[32px] ">
                {/* item 3 */}
                <li className="flex flex-col justify-center items-start gap-[20px] w-full lg:max-w-[400px]">
                  <div className="w-[48px] h-[48px] bg-light-grey-blue rounded-3xl flex justify-center items-center">
                    <img src="./assets/clean-icon.svg" alt="icon"></img>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h4 className="medium-title-text font-semibold text-left text-dark">
                      Easy to Clean
                    </h4>
                    <p className="text-paragraph-sm font-regular text-left text-dark-grey">
                      Maintenance is fairly simple, with dish detergent and warm
                      water being enough to keep most appliances clean.
                    </p>
                  </div>
                </li>
                {/* item 4 */}
                <li className="flex flex-col justify-center items-start gap-[20px] w-full lg:max-w-[400px]">
                  <div className="w-[48px] h-[48px] bg-light-grey-blue rounded-3xl flex justify-center items-center">
                    <img src="./assets/quiet-icon.svg" alt="icon"></img>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h4 className="medium-title-text font-semibold text-left text-dark">
                      Discreet & Silent
                    </h4>
                    <p className="text-paragraph-sm font-regular text-left text-dark-grey">
                      Oral appliances are completely silent, allowing you and
                      your partner to sleep comfortably at night.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* image */}
            <div className="lg:max-w-[500px] w-full max-w-[800px] rounded-xl overflow-hidden max-h-[510px] mt-[48px] lg:mt-[0px]">
              <img
                className=""
                src="./assets/appliance.png"
                alt="Sleeping people"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="w-full h-auto bg-light-grey-blue py-[64px] lg:py-[96px] px-[24px] lg:px-[56px] flex flex-col items-center justify-center">
        {/* Details */}
        {listOfReviews.map((review) => {
          return (
            <Quote
              quote={review.quote}
              name={review.name}
              video={review.video}
              image={review.image}
            />
          );
        })}
      </div>

      {/* Outcomes Section */}
      <div className="w-full h-auto bg-white py-[64px] lg:py-[96px] px-[24px] md:px-[56px] flex flex-col items-center justify-center">
        {/* title */}
        <div className="flex flex-col items-center justify-center w-full h-auto max-w-[640px] lg:max-w-[1280px]">
          <h3 className="title-text font-bold text-center text-dark">
            Outcomes and Results
          </h3>
          <p className="text-paragraph text-center mt-[20px] text-dark-grey max-w-[640px]">
            With their ease of use and effectiveness, many are turning to oral
            appliance therapy.
          </p>
        </div>
        {/* list */}
        <div className="w-full h-auto max-w-[640px] lg:max-w-[1280px]">
          <ul className="mt-[64px] flex flex-wrap lg:flex-row justify-center lg:justify-between items-center gap-[48px] desktop:gap-[80px]">
            {/* item 1 */}
            <li className="flex flex-col justify-center items-center gap-[20px] max-w-[400px]">
              <Stat stat="87%" label="Satisfaction with oral appliance" />
            </li>
            <li className="flex flex-col justify-center items-center gap-[20px] max-w-[400px]">
              <Stat stat="58%" label="Reduction of snoring time" />
            </li>
            <li className="flex flex-col justify-center items-center gap-[20px] max-w-[400px]">
              <Stat stat="86%" label="Reduction in sleep apnea events" />
            </li>
            <li className="flex flex-col justify-center items-center gap-[20px] max-w-[400px]">
              <Stat stat="84%" label="Adherence to treatment" />
            </li>
          </ul>
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

export default Home;
