import React from "react";

import { Block } from "./Block";
import Link from "next/link";
import { Overlay } from "./Overlay";

export const Header = () => {
  return (
    <header className="md:h-[180px] bg-[url('/images/testHeader.jpg')] bg-center">
      {/* TODO fix className */}
      <Overlay className="flex items-center justify-center">
        <Link href="/">
          <Block
            className={`
              text-3xl md:text-6xl
              font-bold 
              text-white
            `}
          >
            Tsumires&apos;s Blog
          </Block>
        </Link>
      </Overlay>
    </header>
  );
};