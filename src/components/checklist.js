import React from "react";

export default function checklist(props) {
  return (
    <li className="flex items-start justify-start gap-[16px]">
      <img src="./assets/check-icon.svg" alt="check icon"></img>
      <p className="text-paragraph text-primary-blue font-semibold">
        {props.content}
      </p>
    </li>
  );
}
