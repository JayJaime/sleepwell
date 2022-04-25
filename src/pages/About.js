import React, { useState, useEffect, useLayoutEffect } from "react";
import CtaSection from "../components/ctaSection";
import ContactInfo from "../components/contactInfo";
import CardBorderless from "../components/cardBorderless";
import { NavLink as ButtonLink, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Swal from "sweetalert2";
import "./Home.css";

function About() {
  const [copiedText, setCopiedText] = useState("");

  useEffect(() => {
    if (copiedText === "") {
      return;
    } else {
      navigator.clipboard.writeText(copiedText);
      Swal.fire("Copied to Clipboard!");
    }
  }, [copiedText]);

  const Reload = () => {
    window.location.assign("/schedule");
  };

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Header Sec New */}
      <div className="w-full h-screen flex flex-col justify-center items-center gap-[64px] pt-[200px] pb-[96px] lg:pt-[96px] lg:pb-[200px] mt-[64px] lg:mt-[64px] px-[24px] md:px-[56px] bg-light-grey-blue relative overflow-hidden">
        <div className="w-full flex flex-col md:flex-row justify-center items-start max-w-[640px] md:max-w-[1280px]">
          <div className="w-full flex flex-col justify-center items-start">
            {/* <p className="text-[14px] md:text-[16px] font-bold text-left sm:text-left max-w-[640px] text-primary-blue tracking-widest">
              ABOUT US
            </p> */}
            <h1 className="text-large-display font-semibold text-left text-dark max-w-[830px] mt-[8px] mb-[24px]">
              Our Mission is to Bring{" "}
              <span className="text-primary-blue">Sleep</span> to{" "}
              <span className="inline-block">New Mexico</span>
            </h1>
            <p className="text-paragraph font-regular text-left sm:text-left max-w-[640px] text-dark-grey">
              Sleep Well New Mexico is a sleep apnea therapy company that
              specializes in providing custom-fitted appliances. With us, people
              with obstructive sleep apnea—from mild to moderate—are now
              sleeping better than ever.
            </p>
          </div>
          {/* desktop image */}
          <div className="w-full hidden md:block rounded-xl overflow-hidden md:max-h-[700px] mt-[64px] md:mt-[0px] absolute bottom-[-20px] left-[200px] right-0">
            <img
              className="object-fill"
              src="./assets/negativeSleepingIllustration-desktop.png"
              alt="sleeping peacefully"
            ></img>
          </div>
          {/* mobile image section */}
          <div className="w-full md:hidden rounded-xl overflow-hidden md:max-h-[500px] md:max-w-[500px] mt-[96px] mb-[0px] md:mt-[0px]">
            <img
              className="object-fill"
              src="./assets/negativeSleepingIllustration-mobile.png"
              alt="sleeping peacefully"
            ></img>
          </div>
        </div>

        <div class="custom-shape-divider-bottom-about-header hidden md:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        <div class="custom-shape-divider-bottom md:hidden">
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

      {/* Header Section */}
      {/* <div className="w-full bg-hero flex justify-center items-center py-[64px] lg:py-[96px] pt-[128px] lg:pt-[192px] px-[24px] md:px-[56px]">
        <div className="w-full flex flex-col justify-center items-center gap-[24px] mb-[80px] lg:mb-[40px] mt-[48px] lg:mt-0">
          <div className="w-full flex flex-col justify-center items-center gap-[24px]">
            <h1 className="lg-display-text font-bold text-center text-white max-w-[1010px]">
              Bringing Sleep to <span className="inline-block">New Mexico</span>
            </h1>
            <p className="text-paragraph font-regular text-center sm:text-center max-w-[800px] text-light-blue">
              Sleep Well New Mexico is a sleep apnea therapy company that
              specializes in providing custom-fitted appliances. With us, people
              with obstructive sleep apnea—from mild to moderate—are now
              sleeping better than ever.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full bg-light-grey-blue flex justify-center items-center py-[64px] lg:py-[96px] pt-[128px] lg:pt-[192px] px-[24px] md:px-[56px]">
        <div className="w-full max-w-[1280px] flex flex-col justify-between items-center gap-[64px]">
          <div className="w-full flex flex-col items-center justify-center gap-[24px]">
            <h1 className="lg-display-text font-bold text-center text-dark max-w-[1100px]">
              Bringing Sleep to <span className="inline-block">New Mexico</span>
            </h1>
            <p className="text-paragraph text-dark-grey text-center max-w-[800px]">
              Untitled is a technology company that builds infrastructure for
              your startup, so you don’t have to. Businesses of every size—from
              new startups to public companies—use our software to manage.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[32px] px-[0px]">
            <ButtonLink
              onClick={Reload}
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
      </div> */}

      {/* Sleep Well Description */}
      <div className="w-full h-auto bg-white py-[64px] lg:py-[120px] flex items-center justify-center px-[24px] md:px-[56px]">
        <div className="max-w-[1280px] w-full flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-[40px]">
          {/* text */}
          <div className="w-full max-w-[640px]">
            <h3 className="title-text font-semibold text-left text-dark">
              Breathe Easy with <span className="inline-block">Sleep Well</span>
            </h3>
            <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              At Sleep Well New Mexico, we saw a disconnect between patients
              seeking a solution to their sleep apnea and the medical practices
              treating them. For most, continuous positive airway pressure
              (CPAP) therapy is the treatment method often prescribed to them
              for their sleep apnea. Despite the effectiveness of CPAP, we found
              that many would find the equipment uncomfortable or even downright
              painful—leading to low adherence to the therapy and even more
              sleepless nights.
            </p>
            <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              But it didn't have to be that way, and here at Sleep Well we
              sought to provide an alternative to CPAP so that people wouldn't
              have to choose between an uncomfortable night using a mask and
              hose, or no sleep at all. By utilizing oral appliance therapy
              (OSA), our patients have finally been able to get the sleep of
              their dreams, without the discomfort or pain associated with CPAP.
              Our custom-fitted appliances fit like a retainer and push the jaw
              forward, ensuring your airway stays open throughout the night so
              you can wake up in the morning energetic and well rested.
            </p>
          </div>
          {/* image */}
          <div className="w-full max-w-[640px] md:max-w-[800px]">
            <img
              className="object-fill"
              src="./assets/old-sleeping.png"
              alt="woman sleeping peacefully"
            ></img>
          </div>
        </div>
      </div>

      {/* Staff Cards */}
      {/* <div className="w-full max-w-[640px] lg:max-w-[1280px] flex flex-col md:flex-row justify-center items-center gap-[56px] md:gap-[124px] py-[64px] lg:py-[96px] px-[24px] md:px-[56px]">
        <CardBorderless
          image="./assets/doctor-img.png"
          role="receptionist"
          name="Addie Williams"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames viverra
          ornare pellentesque volutpat dictum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit."
        />
        <CardBorderless
          image="./assets/doctor-img.png"
          role="Doctor"
          name="Dr. Lillian Jaime"
          info="FFLorem ipsum dolor sit amet, consectetur adipiscing elit. Fames viverra
          ornare pellentesque volutpat dictum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit."
        />
      </div> */}

      {/* Doctor Info Section */}
      <div className="mt-[0px] w-full h-auto bg-light-grey-blue py-[116px] px-[24px] lg:px-[56px] flex flex-col items-center justify-center relative">
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center gap-[0px] lg:gap-[40px] lg:items-center justify-center">
          <div className="w-full flex flex-col items-center lg:items-start justify-center">
            {/* title */}
            <div className="w-full h-auto max-w-[640px] lg:max-w-[850px] pr-[16px] mb-[24px] lg:mb-[48px]">
              <h3 className="title-text font-semibold text-left text-dark">
                Meet the Doctor
              </h3>
              <p className="text-paragraph text-left mt-[20px] text-dark-grey">
                Dr. Lilian Jaime is an ambitious and efficient doctor. Her
                patients find her very gentle and friendly when interacting with
                her, and she enjoys listening to and understanding her patients
                needs.
              </p>
              <p className="text-paragraph text-left mt-[20px] text-dark-grey">
                Dr. Jaime also regulary attends some of the most advanced
                post-doctoral study programs in the country, ensuring that she
                is up-to-date and knowledgeable about the newest advancements in
                sleep services. This commitment to continuing education enables
                her to provide the highest quality care possible to her
                patients.
              </p>
            </div>
            <div className="w-full h-auto max-w-[640px] lg:max-w-[1280px] flex flex-col lg:flex-row items-start justify-between gap-[24px] lg:gap-[64px]"></div>
          </div>
          {/* image */}
          <div className="lg:max-w-[500px] w-full max-w-[640px] rounded-xl overflow-hidden max-h-[510px] mt-[48px] lg:mt-[0px]">
            <img
              className="object-fit"
              src="./assets/doctor-img.png"
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

      {/* Meet Doctor Section */}
      {/* <div className="w-full h-auto bg-light-grey-blue py-[64px] lg:py-[96px] flex items-center justify-center px-[24px] md:px-[56px]">
        <div className="w-full max-w-[1280px] flex flex-col gap-[40px] md:flex-row-reverse items-center justify-between">
          <div className="w-full max-w-[600px]">
            <h3 className="title-text font-semibold text-left text-dark">
              Meet the Doctor
            </h3>
            <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              Dr. Lilian Jaime is an ambitious and efficient doctor. Her
              patients find her very gentle and friendly when interacting with
              her, and she enjoys listening to and understanding her patients
              needs.
            </p>
            <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              Dr. Jaime also regulary attends some of the most advanced
              post-doctoral study programs in the country, ensuring that she is
              up-to-date and knowledgeable about the newest advancements in
              sleep services. This commitment to continuing education enables
              her to provide the highest quality care possible to her patients.
            </p>
          </div>
          <div className="md:max-w-[500px] w-full rounded-xl overflow-hidden h-full md:max-h-[500px]">
            <img
              className="object-fill"
              src="./assets/doctor-img.png"
              alt="Doctor Lilian Jaime"
            ></img>
          </div>
        </div>
      </div> */}

      {/* Location info */}
      <div className="w-full flex justify-center items-center py-[64px] lg:py-[96px] px-[24px] md:px-[56px]">
        <div className="w-full max-w-[1280px] flex flex-col justify-between items-center gap-[0px]">
          {/* title section */}
          <div className="w-full flex flex-col items-center justify-center gap-[24px]">
            <h3 className="title-text font-semibold text-center text-dark">
              Located in Albuquerque
            </h3>
            {/* <p className="text-paragraph text-dark-grey text-center ">
              Everything you need to convert, engage, and retain more users.
            </p> */}
          </div>
          {/* map section */}
          <div className="aspect-video overflow-hidden rounded-md max-w-[1280px] w-full max-h-[400px] border border-light-grey-border mt-[40px] sm:mt-[64px] mb-[64px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.972396464595!2d-106.52648568475612!3d35.1323623803259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6edccfc71fe93d3!2sSleep%20Well%20New%20Mexico!5e0!3m2!1sen!2sus!4v1646083550088!5m2!1sen!2sus"
              width="1280"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          {/* details section */}
          <div className="w-full flex items-center justify-center">
            <ul className="w-full flex flex-col gap-[48px] md:flex-row items-center justify-between">
              <li className="flex flex-col items-center justify-center gap-[20px] w-full max-w-[450px]">
                <img src="./assets/Email-icon.svg" alt="icon"></img>
                <div className="flex flex-col items-center justify-center gap-[8px]">
                  <h4 className="medium-title-text text-dark font-semibold text-center">
                    Email
                  </h4>
                  <p className="text-paragraph-sm text-dark-grey text-center">
                    Our friendly team is here to help.
                  </p>
                  <p
                    onClick={() => setCopiedText("info@sleepwellnewmexico.com")}
                    className="text-paragraph-sm text-primary-blue text-center cursor-pointer"
                  >
                    info@sleepwellnewmexico.com
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center justify-center gap-[20px] w-full max-w-[450px]">
                <img src="./assets/Location-icon.svg" alt="icon"></img>
                <div className="flex flex-col items-center justify-center gap-[8px]">
                  <h4 className="medium-title-text text-dark font-semibold text-center">
                    Office
                  </h4>
                  <p className="text-paragraph-sm text-dark-grey text-center">
                    Come say hello at our office HQ.
                  </p>
                  <p
                    onClick={() =>
                      setCopiedText(
                        "10411 Lagrima De Oro Rd Albuquerque, NM 87111"
                      )
                    }
                    className="text-paragraph-sm text-primary-blue text-center cursor-pointer"
                  >
                    10411 Lagrima De Oro Rd{" "}
                    <span className="inline-block">Albuquerque, NM 87111</span>
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center justify-center gap-[20px] w-full max-w-[450px]">
                <img src="./assets/Phone-icon.svg" alt="icon"></img>
                <div className="flex flex-col items-center justify-center gap-[8px]">
                  <h4 className="medium-title-text text-dark font-semibold text-center">
                    Phone
                  </h4>
                  <p className="text-paragraph-sm text-dark-grey text-center">
                    Mon-Fri from 8am to 5pm.
                  </p>
                  <p
                    onClick={() => setCopiedText("+1 (505) 999-9628")}
                    className="text-paragraph-sm text-primary-blue text-center cursor-pointer"
                  >
                    +1 (505) 999-9628
                  </p>
                </div>
              </li>
            </ul>
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

export default About;
