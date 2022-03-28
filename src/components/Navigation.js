import React, { useState, useEffect } from "react";
import NavLink from "./navLinks";
import MobNavLink from "./mobNavLinks";
import SmButton from "./SmButton";
import { NavLink as ButtonLink } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div>
      {/* Web Navigation */}
      <div className="desktop:block hidden px-4 md:px-[56px] py-4 w-full fixed top-0 left-0 z-10 bg-white shadow-sm">
        <div className="flex items-center justify-between max-w-screen-xl m-auto">
          {/* logo */}
          <ButtonLink to="/" className="logo-wrapper">
            <img
              className="object-fill w-48"
              src="/assets/companyLogo.svg"
              alt="company logo"
            />
          </ButtonLink>
          {/* Navigation */}
          <div className="links-wrapper">
            <NavLink title="Home" url="/" />
            <NavLink title="Cost & Eligibility" url="/cost-and-eligibility" />
            <NavLink title="About Us" url="/about-us" />
            <NavLink
              title="What is Sleep Apnea?"
              url="/sleep-apnea-education"
            />
          </div>
          {/* CTA */}
          <SmButton url="/schedule" />
        </div>
      </div>

      {/* Ipad Navigation */}
      <div className="sm:block desktop:hidden hidden px-8 md:px-[56px] py-4 w-full fixed top-0 left-0 z-10 bg-white shadow-sm">
        <div className="flex items-center justify-between max-w-screen-xl m-auto">
          {/* logo */}
          <ButtonLink to="/" className="logo-wrapper">
            <img
              className="object-fill w-48"
              src="/assets/companyLogo.svg"
              alt="company logo"
            />
          </ButtonLink>
          {/* CTA */}
          <div className="flex gap-x-8">
            <SmButton url="/schedule" />
            {/* Navigation */}
            <div
              onClick={() => setIsOpen(true)}
              className="menu-wrapper p-2 hover:bg-selected-blue cursor-pointer rounded-md transition ease-in-out active:scale-90"
            >
              <img
                className="object-fill w-8"
                src="/assets/menu.svg"
                alt="menu icon"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden block px-8 py-4 w-full fixed top-0 left-0 z-10 bg-white shadow-sm">
        <div className="flex items-center justify-between max-w-screen-xl m-auto">
          {/* logo */}
          <ButtonLink to="/" className="logo-wrapper">
            <img
              className="object-fill w-48"
              src="/assets/companyLogo.svg"
              alt="company logo"
            />
          </ButtonLink>
          <div
            onClick={() => setIsOpen(true)}
            className="menu-wrapper p-2 hover:bg-selected-blue cursor-pointer rounded-md transition ease-in-out active:scale-90"
          >
            <img
              className="object-fill w-8"
              src="/assets/menu.svg"
              alt="menu icon"
            />
          </div>
        </div>
      </div>
      {/* Mobile Navigation Clicked */}
      <div
        className={
          isOpen
            ? "bg-primary-blue w-full h-screen z-50  transition duration-300 ease-in-out opacity-100 px-8 py-4 flex flex-col block fixed"
            : "opacity-0 transition duration-300 ease-in-out hidden"
        }
      >
        <div className="flex items-top justify-between">
          <div onClick={() => setIsOpen(false)} className="flex flex-col">
            <MobNavLink
              onClick={() => console.log("mob clicked")}
              title="Home"
              url="/"
            />
            <MobNavLink
              title="Cost & Eligibility"
              url="/cost-and-eligibility"
            />
            <MobNavLink title="About Us" url="/about-us" />
            <MobNavLink
              title="What is Sleep Apnea?"
              url="/sleep-apnea-education"
            />
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className="x-wrapper p-2 h-12 hover:bg-primary-blue-hover cursor-pointer rounded-md transition ease-in-out active:scale-90"
          >
            <img className="object-fill w-8" src="/assets/x.svg" alt="x icon" />
          </div>
        </div>
        <ButtonLink
          to="/schedule"
          onClick={() => setIsOpen(false)}
          type="button"
          className="mt-8 w-[300px] h-[62px] rounded-full transition ease-in-out pr-4 pl-4 pt-4 pb-4 bg-white text-primary-blue hover:bg-opacity-90 transition ease-in-out duration-300 active:scale-90 flex justify-center items-center"
        >
          <h4 className="text-[20px] font-bold text-center">
            Request Free Consultation
          </h4>
        </ButtonLink>
      </div>
    </div>
  );
}
