import React, { FunctionComponent } from "react";

import { Block } from "@/features/base/components/Block";
import { Category } from "@/features/category/types";
interface Props {
  categories: Category[];
}

export const CategoryList:FunctionComponent<Props> = ({categories}) => {
  return (
    <Block>
      {categories.map((category) => (
        <Block className={`border-b p-1 cursor-pointer hover:font-bold`}key = {category.title}>
          日常
        </Block>
      ))}
    </Block>
  );
};