import React from "react";
import { NavLink } from "react-router-dom";

export default function SmButton(props) {
  const Reload = () => {
    window.location.assign(props.url);
  };

  return (
    <NavLink
      onClick={Reload}
      to={props.url}
      type="button"
      className="rounded-full transition ease-in-out hover:bg-primary-blue-hover pr-6 pl-6 pt-2 pb-2 bg-primary-blue transition ease-in-out duration-300 active:scale-90 flex justify-center items-center"
    >
      <h4 className="text-white font-semibold">Request Free Consultation</h4>
    </NavLink>
  );
}
