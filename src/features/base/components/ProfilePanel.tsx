import React from "react";

import { FaTwitter } from "react-icons/fa";

import { Card } from "@/features/base/components/Card";
import { FilledImage } from "@/features/base/components/FilledImage";
import { Block } from "@/features/base/components/Block";
import Link from "next/link";
import { Title } from "@/features/base/components/Title";

export const ProfilePanel = () => {
  return (
    <Card className="p-4 flex flex-col items-center">
      <FilledImage src="/images/user.jpg" />

      <Title type="h2">tsumire</Title>

      <Block className="mt-4 break-words text-gray-500">
        <p>初めまして、tsumireと申します！</p>
        <p>Java/Ruby/Python/JavaScript...etc</p>
      </Block>

      <Block className="mt-3">
        {/* 後々自分のアカウントをなんか */}
        <Link href="https://twitter.com/Marine765_" target="_blank">
          <FaTwitter className="w-8 h-8 text-sky-500" />
        </Link>
      </Block>
    </Card>
  );
};