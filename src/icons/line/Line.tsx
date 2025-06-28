import React from "react";
import { cn } from "@/lib/utils";

const Line = ({
  fill,
  stroke,
  className,
}: {
  fill?: string;
  stroke?: string;
  className?: string;
}) => {
  return (
    <svg
      width="24"
      height="3"
      fill="none"
      viewBox="0 0 20 3"
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        x2="19"
        y1="1.03597"
        y2="1.03597"
        strokeWidth="2"
        strokeLinecap="round"
        fill={fill || "currentColor"}
        stroke={stroke || "currentColor"}
      />
    </svg>
  );
};

export default Line;
