import React from "react";
import Link from "next/link";

import { Block } from "@/features/base/components/Block";
import { Card } from "@/features/base/components/Card";
import { Title } from "@/features/base/components/Title";
import { BsKeyFill } from "react-icons/bs";
import { useAuthContext } from "@/features/user/contexts/AuthContext";

export const ManagePanel = () => {
  const {session} = useAuthContext();
  return (
    <Card className="w-full p-4">
      <Title className="max-w-fit border-b-2 border-gray-400">管理者</Title>

      {session ? (
              <Link href="/manage" className="cursor-pointer">
              <Block
                className={`
                  mt-2 p-1
                  flex items-center flex-row space-x-1
                  border-transparent
                  text-gray-500 border-b hover:border-gray-400 
              `}
              >
                <BsKeyFill className="h-6 w-6" />
                <Block>記事管理</Block>
              </Block>
            </Link>
      ) : (
        <div>
          Login
        </div>)
      }


    </Card>
  );
};