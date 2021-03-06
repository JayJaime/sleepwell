import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavLinks(props) {
  // window.location.reload();
  const Reload = () => {
    window.location.assign(props.url);
  };

  return (
    <NavLink
      onClick={Reload}
      to={props.url}
      className={({ isActive }) =>
        isActive
          ? "inline-block px-4 py-2 rounded-md mx-2 bg-selected-blue text-primary-blue"
          : "inline-block px-4 py-2 rounded-md mx-2 hover:text-primary-blue cursor-pointer transition ease-in-out"
      }
    >
      <span className="font-semibold">{props.title}</span>
    </NavLink>
  );
}
