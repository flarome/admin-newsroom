import React from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export const ResetIcon: React.FC<SvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15.2 9.4a.6.6 0 1 1-1.2 0A2.4 2.4 0 0 0 11.6 7H6.347l.9.999a.6.6 0 1 1-.893.802l-1.8-2a.6.6 0 0 1 .022-.825l1.8-1.8a.6.6 0 1 1 .848.848L6.45 5.8H11.6a3.6 3.6 0 0 1 3.6 3.6ZM4.8 10.6a.6.6 0 1 1 1.2 0A2.4 2.4 0 0 0 8.4 13h5.253l-.899-.999a.6.6 0 0 1 .892-.802l1.8 2a.6.6 0 0 1-.022.825l-1.8 1.8a.6.6 0 0 1-.848-.848l.776-.776H8.4a3.6 3.6 0 0 1-3.6-3.6Z"
    />
  </svg>
);