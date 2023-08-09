import React, { FunctionComponent, ReactNode} from "react";

interface Props {
  children: ReactNode;
  className?: string;
  type?: "h1" | "h2" | "h3" | "h4";
}

export const Title: FunctionComponent<Props> = ({
  children,
  className,
  type = "h3",
  //指定なければh3を使用する
}) => {
  if (type =="h1") {
    return <h1 className={`font-bold text-5xl ${className}`}>{children}</h1>
  }
  if (type =="h2") {
    return <h1 className={`font-bold text-2xl ${className}`}>{children}</h1>
  }
  if (type =="h4") {
    return <h1 className="text-sm">{children}</h1>
  }
  return <h3 className={`font-bold ${className}`}>{children}</h3>
}