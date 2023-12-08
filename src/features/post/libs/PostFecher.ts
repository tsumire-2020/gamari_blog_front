import axios from "axios"
// importで型エラーが出た時はnpm側が自動で型変換したものを送ってくれる

// fetcher(外部接続するもの)

// fetch axios
// fetch => ブラウザで対応されるので不具合起きにくい

export const fetchPosts = async () => {
  const responce = await axios.get("http://localhost:8000/posts/")

  console.log(responce)
  if (responce.status !== 200) {
    throw new Error("failed")
  }

  return responce.data;
}
