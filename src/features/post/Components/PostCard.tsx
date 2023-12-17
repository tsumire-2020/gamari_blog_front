import React, { FunctionComponent } from "react";
import Image from "next/image";

import { Block } from "@/features/base/components/Block";
import { Relative } from "@/features/base/components/Relative";
import { InLine } from "../../base/components/InLine";
import { Description } from "../../base/components/Description";
import { Absolute } from "../../base/components/Abusolute";
import Link from "next/link";
import { Post } from "../types";


interface Props {
  className?: string;
  post: Post
}

export const PostCard: FunctionComponent<Props> = ({ className, post }) => {
  return (
    <Block
      className={`
        w-full max-w-[350px] 
        bg-white 
        rounded-xl shadow-md
        overflow-hidden
        ${className}
      `}
    >

      {/* NextJSではリンクを使用Link */}
      <Link href="/posts/${post.id}">
      <Relative className="h-[160px] transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
        <Image src={"/images/card.jpg"} fill sizes="100%" alt="...image" />
      </Relative>
      </Link>

      <Relative className="h-[180px] p-8">
        <Block
          className={`
            flex flex-row space-x-2
          `}
        >
          <InLine
            className={`
                px-2 py-1 
                border border-gray-400 
                text-gray-500 font-medium
            `}
          >
            未分類
          </InLine>
        </Block>

        <Description className="mt-2 text-2xl font-bold cursor-pointer hover:scale-105 transition duration-300">
          ブログタイトル
        </Description>

        <Absolute className="bottom-3 right-4">
          <InLine className={`${className} text-gray-500`}>36分前</InLine>
        </Absolute>
      </Relative>
    </Block>
  );
};