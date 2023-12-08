
import { fetchPosts } from "../libs/PostFecher";
import { Post } from "../types";
import { useEffect,useState } from "react";
//  カスタムフック　関数名をuse始まりにする必要がある
// 表示と処理を分離する
export const usePostList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    async function init() {
      // fetchPosts().then((posts) => setPosts(posts));
      
      const posts = await fetchPosts();
      setPosts(posts);
    }
    init();

  }, [])

  return { posts };
}