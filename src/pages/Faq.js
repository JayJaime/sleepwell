import React from "react";
import ListItem from "../components/listItem";
import CtaSection from "../components/ctaSection";
import Footer from "../components/footer";

function Faq() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* FAQ Section */}
      <div className="w-full max-w-[1280px] flex flex-col justify-between items-start md:items-center gap-[64px] py-[64px] lg:py-[96px] mt-[64px] lg:mt-[96px] px-[24px] md:px-[56px]">
        {/* title section */}
        <div className="w-full flex flex-col items-center justify-center gap-[24px] w-full max-w-[940px]">
          <h1 className="lg-display-text font-bold text-center text-dark">
            Frequently Asked Questions
          </h1>
          <p className="text-paragraph text-dark-grey text-center">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please chat to our friendly
            team.
          </p>
        </div>
        {/* List Section */}
        <ul className="flex flex-col md:flex-row items-center justify-center gap-[40px] desktop:py-[40px]">
          <ListItem
            title="Is there a free trial available?"
            content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          />
          <ListItem
            title="Is there a free trial available?"
            content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          />
          <ListItem
            title="Is there a free trial available?"
            content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          />
        </ul>
      </div>

      {/* Second CTA Section */}
      <CtaSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Faq;
