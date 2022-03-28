import React from "react";

export default function stat(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-[0px]">
      <h1 className="text-[48px] sm:text-[56px] lg:text-[72px] font-bold text-center text-primary-blue">
        {props.stat}
      </h1>
      <p className="text-paragraph-sm font-regular text-center text-dark-grey">
        {props.label}
      </p>
    </div>
  );
}
