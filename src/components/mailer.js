import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";

export default function Mailer() {
  const [toSend, setToSend] = useState({
    from_firstname: "",
    from_lastname: "",
    to_name: "Sleep Well New Mexico",
    phone_number: "",
    from_email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_bcvxv0q", "template_eoi0tvi", toSend, "uE01o4EmZA0d_gpv4")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire(
          "Form Sent!",
          "Your appointment request has been sent, a member of our team will contact you shortly to schedule the appointment!",
          "success"
        );
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-[512px]">
      <form
        className="w-full flex flex-col items-center justify-center gap-[24px]"
        onSubmit={onSubmit}
      >
        {/* Name */}
        <div className="w-full flex flex-row gap-[32px]">
          {/* first name */}
          <div className="w-full flex flex-col items-start justify-center gap-[6px]">
            <label className="font-semibold text-[16px] text-dark-grey">
              First Name
            </label>
            <input
              className="w-full max-w-[640px] h-[48px] rounded-[8px] border border-1 border-light-grey-border focus:border-primary-blue outline-none px-[16px] py-[12px] text-paragraph-sm"
              placeholder="First Name"
              type="text"
              name="from_firstname"
              value={toSend.from_name}
              onChange={handleChange}
            />
          </div>
          {/* last name */}
          <div className="w-full flex flex-col items-start justify-center gap-[6px]">
            <label className="font-semibold text-[16px] text-dark-grey">
              Last Name
            </label>
            <input
              className="w-full max-w-[640px] h-[48px] rounded-[8px] border border-1 border-light-grey-border focus:border-primary-blue outline-none px-[16px] py-[12px] text-paragraph-sm"
              placeholder="Last Name"
              type="text"
              name="from_lastname"
              value={toSend.from_name}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email */}
        <div className="w-full flex flex-col items-start justify-center gap-[6px]">
          <label className="font-semibold text-[16px] text-dark-grey">
            Email
          </label>
          <input
            className="w-full max-w-[640px] h-[48px] rounded-[8px] border border-1 border-light-grey-border focus:border-primary-blue outline-none px-[16px] py-[12px] text-paragraph-sm"
            placeholder="Email"
            type="email"
            name="from_email"
            value={toSend.from_email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="w-full flex flex-col items-start justify-center gap-[6px]">
          <label className="font-semibold text-[16px] text-dark-grey">
            Phone Number
          </label>
          <input
            className="w-full max-w-[640px] h-[48px] rounded-[8px] border border-1 border-light-grey-border focus:border-primary-blue outline-none px-[16px] py-[12px] text-paragraph-sm"
            placeholder="Phone Number"
            type="text"
            name="phone_number"
            value={toSend.phone_number}
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex flex-col items-start justify-center gap-[6px]">
          <label className="font-semibold text-[16px] text-dark-grey">
            Message
          </label>
          <textarea
            className="w-full max-w-[640px] h-[124px] rounded-[8px] border border-1 border-light-grey-border focus:border-primary-blue outline-none px-[16px] py-[12px] text-paragraph-sm"
            placeholder="Question/Comment"
            name="message"
            rows="4"
            value={toSend.message}
            onChange={handleChange}
          />
          <input
            className="mt-[32px] w-full rounded-full transition ease-in-out hover:bg-primary-blue-hover pr-6 pl-6 pt-2 pb-2 bg-primary-blue transition ease-in-out duration-300 active:scale-90 flex justify-center items-center text-[18px] text-white font-semibold cursor-pointer"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
}
