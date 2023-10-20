import React from "react";
import { Block } from "@/features/base/components/Block";

export const SearchBox = () => {
  return (
    <Block>
      <input
        className={`
          w-full 
          px-2 py-4 
          rounded-md border outline-none 
          bg-white
          focus:border-gray-500
        `}
        placeholder="検索..."
      />
    </Block>
  );
};