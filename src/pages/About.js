import React, { useState, useEffect, useLayoutEffect } from "react";
import CtaSection from "../components/ctaSection";
import ContactInfo from "../components/contactInfo";
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

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Culture Section */}
      <div className="w-full flex justify-center items-center py-[64px] lg:py-[96px] mt-[64px] lg:mt-[96px] px-[24px] md:px-[56px]">
        <div className="w-full max-w-[1280px] flex flex-col justify-between items-center gap-[64px]">
          {/* title section */}
          <div className="w-full flex flex-col items-center justify-center gap-[24px]">
            <h1 className="text-large-display font-bold text-center text-dark">
              About{" "}
              <span className="text-primary-blue inline-block">Sleep Well</span>
            </h1>
            <p className="text-paragraph text-dark-grey text-center max-w-[640px]">
              Sleep Well New Mexico is a sleep apnea therapy company excelling
              at giving you back the sleep you deserve.
              {/* to give you back the sleep you deserve. We specialize in treating
              patients with mild to moderate sleep apnea, using cutting edge
              technology to create custom oral appliances to fit every need. */}
            </p>
          </div>
          {/* details section */}
          {/* <div className="w-full flex items-center justify-center">
            <ul className="flex flex-col md:flex-row items-center justify-between gap-[40px]">
              <li className="flex flex-col items-center justify-center gap-[20px] w-full max-w-[450px]">
                <img src="./assets/check-icon.svg" alt="icon"></img>
                <div className="flex flex-col items-center justify-center gap-[8px]">
                  <h4 className="medium-title-text text-dark font-semibold text-center">
                    Care About Our Team
                  </h4>
                  <p className="text-paragraph-sm text-dark-grey text-center">
                    Understand what matters to our employees. Give them what
                    they need to do their best work.
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center justify-center gap-[20px] w-full max-w-[450px]">
                <img src="./assets/check-icon.svg" alt="icon"></img>
                <div className="flex flex-col items-center justify-center gap-[8px]">
                  <h4 className="medium-title-text text-dark font-semibold text-center">
                    Care About Our Team
                  </h4>
                  <p className="text-paragraph-sm text-dark-grey text-center">
                    Understand what matters to our employees. Give them what
                    they need to do their best work.
                  </p>
                </div>
              </li>
            </ul>
          </div> */}
          {/* image section */}
          <div className="w-full rounded-xl overflow-hidden max-h-[516px]">
            <img
              className="w-full object-fill"
              src="./assets/practice-img.jpg"
              alt="office"
            ></img>
          </div>
        </div>
      </div>

      {/* Sleep Well Description */}
      <div className="w-full h-auto bg-white py-[64px] lg:py-[96px] flex items-center justify-center px-[24px] md:px-[56px]">
        <div className="w-full max-w-[1280px] flex flex-col gap-[40px] md:flex-row items-center justify-between">
          {/* text */}
          <div className="w-full max-w-[600px] ">
            <h3 className="title-text font-bold text-left text-dark">
              Bringing Sleep to <span className="inline-block">New Mexico</span>
            </h3>
            <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              At Sleep Well New Mexico, our ambitious dream to bring nights of
              full sleep back to those with sleep apnea, started with noticing
              how many people were still not getting good sleep despite having
              access to a CPAP.
            </p>
            <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              We came to realize that many of those suffering from mild to
              moderate sleep apnea didn't need a CPAP, so we began creating
              custom fit oral appliances in order to make full nights of sleep
              more convenient and more easily accessible to those unable to get
              consistent benefit from CPAP therapy.
            </p>
          </div>
          {/* image */}
          <div className="md:max-w-[500px] w-full rounded-xl overflow-hidden h-full md:max-h-[500px]">
            <img
              className="object-fill"
              src="./assets/lilian.jpg"
              alt="Doctor Lilian Jaime"
            ></img>
          </div>
        </div>
      </div>

      {/* Meet Doctor Section */}
      <div className="w-full h-auto bg-light-grey-blue py-[64px] lg:py-[96px] flex items-center justify-center px-[24px] md:px-[56px]">
        <div className="w-full max-w-[1280px] flex flex-col gap-[40px] md:flex-row-reverse items-center justify-between">
          {/* text */}
          <div className="w-full max-w-[600px] ">
            <h3 className="title-text font-bold text-left text-dark">
              Meet the Doctor
            </h3>
            <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
            </p>
            <p className="text-paragraph text-left mt-[20px] text-dark-grey">
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
              condimentum mi massa. In tincidunt pharetra consectetur sed duis
              facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
              dictum eget nibh tortor commodo cursus.
            </p>
          </div>
          {/* image */}
          <div className="md:max-w-[500px] w-full rounded-xl overflow-hidden h-full md:max-h-[500px]">
            <img
              className="object-fill"
              src="./assets/lilian.jpg"
              alt="Doctor Lilian Jaime"
            ></img>
          </div>
        </div>
      </div>

      {/* Location info */}
      <div className="w-full flex justify-center items-center py-[64px] lg:py-[96px] px-[24px] md:px-[56px]">
        <div className="w-full max-w-[1280px] flex flex-col justify-between items-center gap-[64px]">
          {/* title section */}
          <div className="w-full flex flex-col items-center justify-center gap-[24px]">
            <h3 className="title-text font-bold text-center text-dark">
              Located in Albuquerque
            </h3>
            <p className="text-paragraph text-dark-grey text-center ">
              Everything you need to convert, engage, and retain more users.
            </p>
          </div>
          {/* map section */}
          <div className="aspect-video overflow-hidden rounded-xl max-w-[1280px] w-full max-h-[400px] border border-light-grey">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.9733066344115!2d-106.52647698508976!3d35.13233966748643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87189fe597202123%3A0xf565675ad3c25c9!2sSunshine%20Dental!5e0!3m2!1sen!2sus!4v1644440428184!5m2!1sen!2sus"
              width="1280"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          {/* details section */}
          <div className="w-full flex items-center justify-center">
            <ul className="w-full flex flex-col gap-[48px] md:flex-row items-start justify-between">
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
                    10411 Lagrima De Oro Rd Albuquerque, NM 87111
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
                  <p className="text-paragraph-sm text-primary-blue text-center">
                    +1 (555) 000-0000
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
