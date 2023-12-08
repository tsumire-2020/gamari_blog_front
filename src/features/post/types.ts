// 型を定義
// 投稿のために使うもの


// JSONでやるので基本String
// 他にはbooleanとか
export interface Post {
  id: string;
  content: string;
  header_image: string;
  created_at: string;
  updated_at: string;

}