import React, { FunctionComponent} from "react";
import {InLine} from "./InLine";

interface Props {
  className?: string;
  label: string;
  isFill?: boolean;
  onClick?: () => void;
}

export const Badge: FunctionComponent<Props> = ({
  label,
  className,
  isFill = true,
  onClick
}) => {
  return (
    <InLine
      className={`
      min-w-max
      px-3 py-1
      text-lg
      rounded-full border-gray-500 cursor-pointer
      
      ${isFill ? "bg-gray-500 text-white" : "bg-gray-50 text-gray-600"}
      ${className}`}
      onClick={() => onClick && onClick()}
    >
      {label}
    </InLine>
  );
};