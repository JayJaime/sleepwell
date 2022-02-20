import React from "react";
import { NavLink } from "react-router-dom";

export default function footerLink(props) {
  return (
    <NavLink
      to={props.url}
      className={({ isActive }) =>
        isActive
          ? "inline-block my-[12px] rounded-md mx-2 "
          : "inline-block my-[12px] rounded-md mx-2 cursor-pointer transition ease-in-out"
      }
    >
      <span className="font-semibold text-primary-blue">{props.title}</span>
    </NavLink>
  );
}
