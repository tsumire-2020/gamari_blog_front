import { Block } from "@/features/base/components/Block";
import { Header } from "@/features/base/components/Header";
import { Layoyut } from "@/features/base/components/Layoyut";
import { Main } from "@/features/base/components/Main";
import { Pagination } from "@/features/base/components/Pagination";
import { Sidebar } from "@/features/base/components/Sidebar";
import { PostCardList } from "@/features/post/Components/PostCardList";
import { usePostList } from "@/features/post/hooks/usePostList";
import { fetchPosts } from "@/features/post/libs/PostFecher";
import { Post } from "@/features/post/types";
import { useEffect,useState } from "react";

// {}付き　ネームド名称を付与して識別する
//  {}なし　一個しか作れない
export default function Home() {
  const {posts} = usePostList();
  // {}が付く場合：return がobjectの時　スプレッド構文を利用する場合
  return (
    <>
      <Header />

      <Main className="bg-gray-200/80 min-h-screen w-full">
        <Block className="max-w-[1100px] mx-auto grid grid-cols-[1fr,min-content] gap-8">
          {/* TODO fix className */}
          <Block className="mt-10">
          <Layoyut>
    <PostCardList posts={posts} />

    <Pagination />
    </Layoyut>
          </Block>

          <Sidebar className="mt-10" />
        </Block>
      </Main>
    </>
  );
}