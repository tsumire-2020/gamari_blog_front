import React, {FunctionComponent} from "react"

interface Props {
  text: string;
  setText: (val: string) => void;
  placeholder?: string;
  className?: string;
  type?: "text" | "password" | "email";
  size?: "sm" | "md" | "lg";
}

export const Input: FunctionComponent<Props> = ({
  text,
  setText,
  className,
  placeholder,
  type = "text",
  size = "md",
}) => {
  return (
    <input
      type={type}
      value={text}
      onChange={(e) => setText(e.target.value)}
      //イベント受付時の処理？
      className={`
        ${size == "sm" && "text-sm px-2 py-1"}
        ${size == "md" && "text-sm px-3 py-2"}
        ${size == "lg" && "text-sm px-4 py-3"}
        rounded-md border outline-none
        border-gray-300 focus:border-gray-500
        ${className}
      `}
      placeholder={placeholder}
    />
  )
}