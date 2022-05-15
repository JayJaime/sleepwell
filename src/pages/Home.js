import React from "react";
import { NavLink as ButtonLink, useNavigate } from "react-router-dom";
import Quote from "../components/quote";
import Stat from "../components/stat";
import CtaSection from "../components/ctaSection";
import ContactInfo from "../components/contactInfo";
import Footer from "../components/footer";
import "./Home.css";
import FinancingSection from "../components/careCreditPreQualify";
import useAnalyticsEventTracker from "../components/useAnalyticsEventTracker";

function Home() {
  const gaEventTracker = useAnalyticsEventTracker("Home");

  let videoPoster = document.getElementById("poster");
  console.log(videoPoster);

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  const Reload = () => {
    window.location.assign("/schedule");
  };

  const listOfReviews = [
    {
      quote:
        '"Love the simplicity of the service and the prompt customer support. We can’t imagine working without it."',
      name: "Lyle Kauffman",
      video:
        "https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0",
      image: "./assets/unsplash.jpg",
      poster: "./assets/unsplash.jpg",
    },
  ];

  const playVideo = () => {
    console.log("you clicked it");
    var videoPoster = document.getElementById("poster");
    videoPoster.classList.add("hidden");
    var video = document.getElementById("video");
    video.classList.remove("hidden");
    // play video
    video.src += "&autoplay=1";
    gaEventTracker("playVideo");
  };

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

      {/* New Hero Section */}
      <div className="w-full flex flex-col justify-center items-center gap-[64px] pt-[64px] pb-[0px] video-md:pb-[96px] lg:pt-[96px] lg:pb-[300px] mt-[64px] lg:mt-[64px] px-[0px] md:px-[56px] bg-light-grey-blue relative overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row justify-center items-start">
          <div className="w-full flex flex-col justify-start items-start max-w-[640px] md:max-w-[1280px] px-[24px] md:px-[0px]">
            <p className="text-[14px] md:text-[16px] font-bold text-left sm:text-left max-w-[640px] text-primary-blue tracking-widest">
              BREATHE EASIER. SLEEP DEEPER.
            </p>
            <h1 className="text-large-display font-semibold text-left text-dark max-w-[820px] mt-[8px] mb-[24px] z-10">
              Say Goodbye to Your Mask & Hello to{" "}
              <span className="text-primary-blue">Better Sleep!</span>
            </h1>
            <p className="text-paragraph font-regular text-left sm:text-left max-w-[640px] text-dark-grey z-10">
              We provide a simple, and efficient treatment option for
              obstructive sleep apnea, with custom-made oral appliances that fit
              like a retainer and keep you sound asleep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-[56px] gap-[32px] px-[0px]">
              <ButtonLink
                onClick={Reload}
                to="/schedule"
                type="button"
                className="w-full w-[310px] h-[62px] rounded-full transition ease-in-out pl-4 pr-4 pt-4 pb-4 bg-primary-blue text-white hover:bg-primary-blue-hover transition ease-in-out duration-300 active:scale-90 flex justify-center items-center"
              >
                <h4 className=" text-[20px] font-bold text-center">
                  Request Free Consultation
                </h4>
              </ButtonLink>
            </div>
          </div>
          {/* image section */}
          <div className="w-full hidden xl:block overflow-hidden  3xl:max-w-[1400px] md:max-w-[1100px] mt-[64px] md:mt-[0px] absolute right-[-500px]">
            <img
              className="object-fill"
              src="./assets/hero-img-color.png"
              alt="sleeping peacefully"
            ></img>
          </div>
          {/* mid size image */}
          <div className="w-full hidden max-w-[1000px] video-md:block xl:hidden rounded-xl mt-[64px] md:mt-[0px] ml-[0px] md:ml-[24px]">
            <img
              className="object-fill"
              src="./assets/hero-img-color-md.png"
              alt="sleeping peacefully"
            ></img>
          </div>
          {/* mobile image section */}
          <div className="w-full video-md:hidden overflow-hidden mt-[64px] mb-[0px] md:mt-[0px]">
            <img
              className="object-fill"
              src="./assets/hero-img-color-mobile.png"
              alt="sleeping peacefully"
            ></img>
          </div>
        </div>

        <div class="custom-shape-divider-bottom-arrow hidden xl:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      {/* <div className="w-full flex flex-col justify-center items-center gap-[64px] py-[64px] lg:py-[96px] mt-[64px] lg:mt-[64px] px-[24px] md:px-[56px]">
        <div className="w-full flex flex-col justify-center items-center gap-[24px]">
          <div className="w-full flex flex-col justify-center items-center gap-[24px] md:p-[32px] p-[0px]">
            <h1 className="text-large-display font-bold text-center text-dark max-w-[850px]">
              No Mask. <span className="inline-block">No Surgery.</span>{" "}
              <span className="inline-block text-primary-blue">
                Sleep Well.
              </span>
            </h1>
            <p className="text-paragraph font-regular text-center sm:text-center max-w-[840px] text-dark-grey">
              We provide a simple and efficient alternative to CPAP therapy,
              with custom-made oral appliances that fit like a retainer and keep
              you sound asleep.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-[24px] sm:mt-[0px] gap-[32px] px-[0px]">
            <ButtonLink
              onClick={Reload}
              to="/schedule"
              type="button"
              className="w-auto w-[310px] h-[62px] rounded-full transition ease-in-out pl-4 pr-4 pt-4 pb-4 bg-primary-blue text-white hover:bg-primary-blue-hover transition ease-in-out duration-300 active:scale-90 flex justify-center items-center"
            >
              <h4 className=" text-[20px] font-bold text-center">
                Request Free Consultation
              </h4>
            </ButtonLink>
          </div>
        </div>
      </div> */}

      {/* How It Works Section */}
      <div className="mt-[24px] w-full py-[48px] lg:py-[56px] flex items-center justify-center px-[24px] md:px-[56px]">
        <div className="max-w-[1280px] w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-[40px]">
          {/* video */}
          <div className="aspect-video overflow-hidden rounded-md max-w-[640px] w-full relative mt-[40px] lg:mt-[0px]">
            <div id="poster" onClick={playVideo}>
              <img
                className="absolute left-0 right-0 top-0 bottom-0 m-auto cursor-pointer"
                src="./assets/play-icon.svg"
                alt="play button"
              ></img>
              <img src="./assets/CommercialBG.png" className="cursor-pointer" />
            </div>
            <iframe
              id="video"
              title="Commercial"
              src="https://player.vimeo.com/video/693768705?h=c5a1c6d116"
              className="embed-container hidden"
              width="640px"
              height="360px"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          {/* text section */}
          <div className="w-full max-w-[640px] h-full flex flex-col items-start justify-between gap-[24px]">
            {/* <h3 className="title-text font-bold text-left text-dark">
              How Treatment With{" "}
              <span className="text-primary-blue inline-block">Sleep Well</span>{" "}
              Works
            </h3> */}
            <h3 className="title-text font-semibold text-left text-dark">
              A Custom Sleep Device For a More Restful Night
            </h3>
            <p className="text-paragraph text-primary-blue font-semibold">
              Oral appliance therapy is an alternative to CPAP therapy that
              works by moving your jaw forward, keeping your airway open while
              you sleep.
            </p>
            <p className="text-paragraph-sm text-dark-grey">
              Before you go to bed, simply place the oral appliance in your
              mouth like a retainer and go to sleep knowing you'll be well
              rested and full of energy in the morning.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-[0px] w-full h-auto bg-white py-[64px] lg:py-[96px] px-[24px] lg:px-[56px] flex flex-col items-center justify-center">
        <div className="w-full max-w-[1280px] flex flex-col items-center lg:items-start justify-center">
          {/* title */}
          <div className="w-full h-auto max-w-[640px] lg:max-w-[850px] pr-[16px] mb-[64px] ">
            <h3 className="title-text font-semibold text-left text-dark">
              Benefits to Oral Appliance Therapy
            </h3>
            <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              The oral appliance fits just like a retainer, and since its custom
              fit just for you, sleeping peacefully has never been easier.
            </p>
          </div>
          <div className="w-full h-auto max-w-[640px] lg:max-w-[1280px] flex flex-col lg:flex-row items-center justify-between gap-[24px] lg:gap-[64px]">
            {/* list */}
            <div className="w-full h-auto">
              <ul className="w-full flex flex-col lg:flex-row justify-start items-start gap-[48px] desktop:gap-[32px] ">
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
              <ul className="w-full mt-[64px] flex flex-col lg:flex-row justify-start items-start gap-[48px] desktop:gap-[32px] ">
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
      {/* <div className="w-full h-auto bg-light-grey-blue py-[64px] lg:py-[96px] px-[24px] lg:px-[56px] flex flex-col items-center justify-center">
        {listOfReviews.map((review) => {
          return (
            <Quote
              quote={review.quote}
              name={review.name}
              video={review.video}
              image={review.image}
              poster={review.poster}
            />
          );
        })}
      </div> */}

      {/* Outcomes Section */}
      <div className="w-full h-auto bg-white py-[64px] lg:py-[96px] px-[24px] md:px-[56px] flex flex-col items-center justify-center">
        {/* title */}
        <div className="flex flex-col items-center justify-center w-full h-auto max-w-[640px] lg:max-w-[1280px]">
          <h3 className="title-text font-semibold text-center text-dark">
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
            <li className="flex flex-col video-xs:justify-start video-xs:items-start video-sm:justify-center video-sm:items-center gap-[20px] max-w-[400px]">
              <Stat stat="76%" label="Reduction of snoring time" />
            </li>
            <li className="flex flex-col video-xs:justify-start video-xs:items-start video-sm:justify-center video-sm:items-center gap-[20px] max-w-[400px]">
              <Stat stat="85%" label="Reduction in sleep apnea events" />
            </li>
            <li className="flex flex-col video-xs:justify-start video-xs:items-start video-sm:justify-center video-sm:items-center gap-[20px] max-w-[400px]">
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
