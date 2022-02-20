import React from "react";

export default function quote(props) {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:even:flex-row-reverse justify-center items-center w-full max-w-[1280px] gap-[24px] lg:gap-[64px] first:mt-[0px] last:mb-[0px] my-[40px] desktop:my-[72px]">
      <div className="w-full max-w-[640px] flex flex-col justify-center items-start gap-[24px]">
        <div className="flex flex-row items-center justify-center gap-[4px]">
          <img src="./assets/star-icon.svg" alt="star icon"></img>
          <img src="./assets/star-icon.svg" alt="star icon"></img>
          <img src="./assets/star-icon.svg" alt="star icon"></img>
          <img src="./assets/star-icon.svg" alt="star icon"></img>
          <img src="./assets/star-icon.svg" alt="star icon"></img>
        </div>
        <p className="text-paragraph-xl font-semibold text-primary-blue text-left">
          {props.quote}
        </p>
        <div className="flex justify-start items-center gap-[16px]">
          <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={props.image}
              alt="patient"
            ></img>
          </div>
          <div>
            <h4 className="medium-title-text font-semibold text-dark">
              {props.name}
            </h4>
            <p className="text-paragraph-sm text-dark-grey">
              Data Engineer, Sisyphus
            </p>
          </div>
        </div>
      </div>
      <div className="aspect-video overflow-hidden rounded-xl max-w-[640px] w-full">
        <iframe
          title="Video Review"
          src={props.video}
          className="embed-container"
          width="640px"
          height="360px"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
