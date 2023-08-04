import React, {Children, FunctionComponent} from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const InLine: FunctionComponent<Props> = ({
  children,
  className,
  onClick,
  }) => {
    return (
      <span className={`${className || ""}`} onClick={onClick}>
        {children}
      </span>
    );
  };