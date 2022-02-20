import React, { useLayoutEffect } from "react";
import Checklist from "../components/checklist";
import CtaSection from "../components/ctaSection";
import ContactInfo from "../components/contactInfo";
import Footer from "../components/footer";

export default function Education() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Title */}
      <div className="w-full max-w-[980px] flex flex-col items-center justify-center pt-[64px] lg:pt-[96px] mt-[64px] lg:mt-[96px] px-[24px] desktop:px-[0px] gap-[20px]">
        <h1 className="text-large-display font-bold text-center text-dark">
          What is Sleep Apnea?
        </h1>
        {/* <p className="text-paragraph text-dark-grey text-center max-w-[740px]">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p> */}
      </div>

      {/* What is Sleep Apnea Section */}
      <div className="w-full py-[64px] lg:py-[96px] flex items-center justify-center px-[24px] md:px-[56px]">
        <div className="max-w-[1280px] w-full flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-[40px]">
          {/* video */}
          <div className="aspect-video overflow-hidden rounded-xl max-w-[640px] w-full">
            <iframe
              className="embed-container"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LeOYEMg_EVE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          {/* text section */}
          <div className="w-full max-w-[640px] h-full flex flex-col items-start justify-between gap-[24px]">
            {/* <h3 className="title-text font-bold text-left text-dark">
              What is Sleep Apnea?
            </h3> */}
            <p className="text-paragraph text-dark-grey">
              Are you constantly waking up in the middle of the night? Do you
              still feel tired in the morning? You may have sleep apnea, a
              common sleeping disorder that is characterized by frequent moments
              of halted breathing during the night.
            </p>
            <p className="text-paragraph text-dark-grey">
              These moments where you are no longer breathing can be more than
              just an inconvenience, in some cases it could even be life
              threatening if not treated correctly. Watch the nearby video to
              learn more.
            </p>
          </div>
        </div>
      </div>

      {/* Types of SLeep Apnea */}
      <div className="mt-[0px] w-full h-auto bg-white py-[64px] lg:py-[96px] px-[24px] lg:px-[56px] flex flex-col items-center justify-center">
        <div className="w-full max-w-[1280px] flex flex-col items-center justify-center">
          {/* title */}
          <div className="w-full h-auto max-w-[640px] lg:max-w-[1280px] pr-[16px] flex flex-col items-center justify-center">
            <h3 className="title-text font-bold text-center text-dark">
              3 Types of Sleep Apnea
            </h3>
            <p className="text-paragraph text-center mt-[20px] text-dark-grey max-w-[640px]">
              Treatment may differ between types, so it's import to consult a
              doctor if you suspect you have sleep apnea.
            </p>
          </div>
          {/* list */}
          <div className="w-full h-auto max-w-[640px] lg:max-w-[1280px]">
            <ul className="w-full mt-[64px] flex flex-col lg:flex-row justify-center items-start gap-[48px] desktop:gap-[40px] ">
              {/* item 1 */}
              <li className="flex flex-col justify-center items-center gap-[20px] w-full lg:max-w-[400px]">
                <div className="w-[48px] h-[48px] bg-light-grey-blue rounded-3xl flex justify-center items-center">
                  <h4 className="text-primary-blue font-bold text-[18px] sm:text-[20px]">
                    1
                  </h4>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h4 className="medium-title-text font-semibold text-center text-dark">
                    Obstructive Sleep Apnea
                  </h4>
                  <p className="text-paragraph-sm font-regular text-center text-dark-grey">
                    This is the most common type of sleep apnea, and it occurs
                    when your tongue or other tissues in the back of your throat
                    block your airway.
                  </p>
                </div>
              </li>
              {/* item 2 */}
              <li className="flex flex-col justify-center items-center gap-[20px] w-full lg:max-w-[400px]">
                <div className="w-[48px] h-[48px] bg-light-grey-blue rounded-3xl flex justify-center items-center">
                  <h4 className="text-primary-blue font-bold text-[18px] sm:text-[20px]">
                    2
                  </h4>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h4 className="medium-title-text font-semibold text-center text-dark">
                    Central Sleep Apnea
                  </h4>
                  <p className="text-paragraph-sm font-regular text-center text-dark-grey">
                    This type is less common and it occurs when the brain fails
                    to send a signal to the muscles that control your breathing.
                  </p>
                </div>
              </li>
              {/* item 3 */}
              <li className="flex flex-col justify-center items-center gap-[20px] w-full lg:max-w-[400px]">
                <div className="w-[48px] h-[48px] bg-light-grey-blue rounded-3xl flex justify-center items-center">
                  <h4 className="text-primary-blue font-bold text-[18px] sm:text-[20px]">
                    3
                  </h4>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h4 className="medium-title-text font-semibold text-center text-dark">
                    Complex Sleep Apnea
                  </h4>
                  <p className="text-paragraph-sm font-regular text-center text-dark-grey">
                    This type of sleep apnea occurs when you have both
                    obstructive and central sleep apnea.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Signs or symptoms Section */}
      <div className="w-full flex flex-col items-center justify-center py-[64px] lg:py-[96px] px-[24px] md:px-[56px] gap-[64px] bg-white">
        {/* title */}
        <div className="w-full h-auto max-w-[640px] lg:max-w-[1280px] pr-[16px] flex flex-col items-center justify-center">
          <h3 className="title-text font-bold text-center text-dark">
            Signs You May Have Sleep Apnea
          </h3>
          <p className="text-paragraph text-center mt-[20px] text-dark-grey max-w-[740px]">
            Sleep apnea can negatively impact daily life. Those with obstructive
            sleep apnea may experience the following symptoms.
          </p>
        </div>
        {/* checklist */}
        <div className="w-full max-w-[1280px] flex flex-col-reverse md:flex-row items-center justify-center gap-[40px]">
          <div className="w-full max-w-[640px] lg:max-w-full flex items-center justify-center gap-[20px] md:gap-[64px] flex-wrap sm:flex-nowrap">
            <ul className="flex flex-col gap-[20px]">
              <Checklist content="Loud snoring at night" />
              <Checklist content="Insomnia with frequent awakenings" />
              <Checklist content="Choking or gasping in your sleep" />
              <Checklist content="Daytime sleepiness" />
            </ul>
            <ul className="flex flex-col gap-[20px]">
              <Checklist content="Difficulty concentrating while awake" />
              <Checklist content="Changes in mood" />
              <Checklist content="Restlessness during sleep" />
              <Checklist content="Vivid or threatening dreams" />
            </ul>
          </div>
        </div>
      </div>

      {/* Risks Section */}
      <div className="w-full flex justify-center items-center py-[64px] lg:py-[96px]">
        <div className="bg-light-grey-blue w-full max-w-[1280px] flex flex-col lg:flex-row items-center justify-center py-[48px] md:py-[56px] px-[24px] md:px-[56px] desktop:rounded-xl gap-[64px]">
          {/* title */}
          <div className="w-full h-auto max-w-[640px] lg:max-w-[1280px] pr-[16px]">
            <h3 className="title-text font-bold text-left text-dark">
              Risks of Untreated{" "}
              <span className="inline-block">Sleep Apnea</span>
            </h3>
            <p className="text-paragraph text-dark-grey max-w-[640px] mt-[20px]">
              Sleep apnea is a common sleep disorder that can be fairly
              dangerous if left untreated. It is often linked with increasing
              the risk of other serious conditions such as cardiovascular
              disease and diabetes, as well as increasing the risk of being
              involved in potentially life threatening automobile accidents due
              to sleep deprivation. If you believe you have sleep apnea, contact
              your doctor as soon as possible.
            </p>
          </div>
          {/* checklist */}
          <div className="w-full max-w-[1280px] flex flex-col-reverse md:flex-row items-center justify-center gap-[40px]">
            <div className="w-full max-w-[640px] lg:max-w-full flex items-center justify-between gap-[20px] md:gap-[64px] flex-wrap sm:flex-nowrap">
              {/* <p className="text-paragraph text-dark-grey max-w-[640px]">
              Sleep apnea is a common sleep disorder that can be fairly
              dangerous if left untreated. It is often linked with increasing
              the risk of other serious conditions such as cardiovascular
              disease and diabetes, as well as increasing the risk of being
              involved in potentially life threatening automobile accidents due
              to sleep deprivation. If you believe you have sleep apnea, contact
              your doctor as soon as possible.
            </p> */}
              <ul className="flex flex-col gap-[20px]">
                <Checklist content="Daytime fatigue" />
                <Checklist content="High blood pressure" />
                <Checklist content="Heart attack" />
                <Checklist content="Cardiovascular disease " />
                <Checklist content="Diabetes" />
                <Checklist content="Workplace accidents" />
                <Checklist content="Automobile accidents" />
                <Checklist content="Stroke" />
              </ul>
              {/* <ul className="flex flex-col gap-[20px]">
            </ul> */}
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Options Section */}
      <div className="w-full py-[64px] lg:py-[96px] flex items-center justify-center px-[24px] md:px-[56px]">
        <div className="max-w-[1280px] w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-[40px]">
          {/* image */}
          <div className="overflow-hidden rounded-xl max-w-[500px] w-full">
            <img
              className="object-fill"
              src="./assets/treatment-options.svg"
            ></img>
          </div>
          {/* text section */}
          <div className="w-full max-w-[640px] h-full flex flex-col items-start justify-between gap-[24px]">
            <h3 className="title-text font-bold text-left text-dark">
              Treatment Options
            </h3>
            <p className="text-paragraph text-dark-grey">
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

      {/* How Sleep Well Can Help Section */}
      <div className="w-full py-[64px] lg:py-[96px] flex items-center justify-center px-[24px] md:px-[56px]">
        <div className="max-w-[1280px] w-full flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-[40px]">
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
              How <span className="text-primary-blue">Sleep Well</span> Treats
              Obstructive Sleep Apnea
            </h3>
            {/* <p className="text-paragraph text-primary-blue font-semibold">
              Inspire is an alternative to CPAP that works inside your body
              while you sleep. It’s a small device placed during a same-day,
              outpatient procedure.
            </p> */}
            <p className="text-paragraph text-dark-grey">
              Inspire is an alternative to CPAP that works inside your body
              while you sleep. It’s a small device placed during a same-day,
              outpatient procedure.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      {/* Second CTA Section */}
      <CtaSection />

      {/* Contact info section */}
      <ContactInfo />

      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
}
