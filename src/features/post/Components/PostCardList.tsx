import React,{ FunctionComponent } from "react";

import { Block } from "@/features/base/components/Block";
import { PostCard } from "./PostCard";
import { Post } from "../types";

interface Props {
  posts: Post[];
}



// export const PostCardList = ({posts}: Props) => {
// 総称型　ええ感じに型の補完をする
  export const PostCardList: FunctionComponent<Props> = ({posts}) => {
  return (
    <Block className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12 ">
      {posts.map((post) => (
        <PostCard key={post.id} post ={post}/>
        // <PostCard key={`card-${post.id}`} /> バッティング対策（一意にできない場合
      ))}
      {/* <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard /> */}
    </Block>
  );
};