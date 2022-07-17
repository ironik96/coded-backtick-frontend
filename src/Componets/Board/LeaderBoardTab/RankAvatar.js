import React from "react";

const RankAvatar = ({ rank, image }) => {
  let fillColor;
  if (rank === 1) fillColor = "fill-theme-green";
  if (rank === 2) fillColor = "fill-theme-yellow";
  if (rank === 3) fillColor = "fill-theme-red";
  if (rank > 3) fillColor = "fill-theme-dark-grey";
  return (
    <div className="relative overflow-hidden">
      <svg
        className={fillColor}
        width="86"
        height="52"
        viewBox="0 0 86 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-2.5332e-06 26C-2.5332e-06 11.6406 45.1406 3.09944e-06 59.5 3.09944e-06C73.8594 3.09944e-06 85.5 11.6406 85.5 26C85.5 40.3594 73.8594 52 59.5 52C45.1406 52 -2.5332e-06 40.3594 -2.5332e-06 26Z"
          fill="inheret"
        />
      </svg>
      <img
        className="rounded-full w-[49px] h-[49px] absolute object-cover right-0.5 top-1/2 -translate-y-1/2"
        src={image}
        alt="avatar"
      />
      <div className="absolute left-1/2 -translate-x-[26px] top-3 text-lg text-white font-bold">
        {rank}
      </div>
    </div>
  );
};

export default RankAvatar;
