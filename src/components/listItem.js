import React from "react";

export default function listItem(props) {
  return (
    <li className="flex flex-col justify-center items-center gap-[20px] w-full md:max-w-[400px]">
      <div className="flex flex-col gap-[8px]">
        <h4 className="medium-title-text font-semibold text-left text-dark">
          {props.title}
        </h4>
        <p className="text-paragraph-sm font-regular text-left text-dark-grey">
          {props.content}
        </p>
      </div>
    </li>
  );
}
