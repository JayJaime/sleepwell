import React from "react";

function cardBorderless(props) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* image */}
      <div className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={props.image} />
      </div>
      {/* Title */}
      <div className="mt-[24px] mb-[8px] flex flex-col items-center justify-center gap-[8px]">
        <h6 className="text-primary-blue text-paragraph-sm font-semibold text-center tracking-wider uppercase">
          {props.role}
        </h6>
        <h3 className="text-paragraph-xl font-bold text-center">
          {props.name}
        </h3>
      </div>
      {/* Content */}
      <p className="w-full max-w-[578px] text-center text-paragraph text-dark-grey">
        {props.info}
      </p>
    </div>
  );
}

export default cardBorderless;
