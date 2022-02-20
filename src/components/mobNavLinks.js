import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks(props) {
  return (
    <NavLink
      to={props.url}
      className={({ isActive }) =>
        isActive
          ? "inline-block text-dark px-4 py-2 rounded-md first-of-type:my-0 my-4 bg-primary-blue-hover text-white text-3xl"
          : "inline-block text-dark px-4 py-2 rounded-md first-of-type:my-0 my-4 hover:opacity-100 cursor-pointer transition ease-in-out text-3xl text-white opacity-80"
      }
    >
      <span className="font-semibold text-white">{props.title}</span>
    </NavLink>
  );
}
