import React from "react";

const StarIcon = ({ width = 24, height = 24, color = "gold" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14.09 8.26L20.18 8.27L15.54 12.14L17.63 18.18L12 14.77L6.37 18.18L8.46 12.14L3.82 8.27L9.91 8.26L12 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
