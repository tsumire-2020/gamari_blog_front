import React, { FunctionComponent } from "react";

import { Block } from "@/features/base/components/Block";
import { Button } from "@/features/base/components/Button";
import { InLine } from "./InLine";

interface Props {
  className?: string;
}

export const Pagination: FunctionComponent<Props> = ({ className }) => {
  return (
    <Block className={`flex justify-center ${className || ""}`}>
      <Button label="前へ" />

      <InLine className="mx-2 py-2 px-4 text-gray-500">2 / 10</InLine>

      <Button label="次へ" />
    </Block>
  );
};