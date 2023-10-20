import React from "react";

import { Block } from "@/features/base/components/Block";

export const CategoryList = () => {
  return (
    <Block>
      <Block className={`border-b p-1 cursor-pointer hover:font-bold`}>
        日常
      </Block>
      <Block className={`border-b p-1 cursor-pointer hover:font-bold`}>
        エンジニアブログ
      </Block>
    </Block>
  );
};