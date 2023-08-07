import React, { FunctionComponent} from "react";
import { Block } from "./Block";

interface Props {
  children:React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: FunctionComponent<Props> = ({ className, children, onClick }) => {
  return(
    <Block
    className={`
    bg-white
      md:shadow
      md:rounded-lg
      ${className || ""}
    `}
    onClick={onClick}>
      {children}
    </Block>
  );
};