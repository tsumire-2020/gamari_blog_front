import React, { FunctionComponent } from "react";
 
interface Props {
  children: React.ReactNode;
  className?: string;
}
//バナー広告や関連記事情報をコンテンツに足すときに使うやつ？
export const Aside: FunctionComponent<Props> = ({ children, className }) => {
  return <aside className={`${className || className}`}>{children}</aside>
};