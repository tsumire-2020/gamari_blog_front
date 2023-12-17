// rafce
import { Layoyut } from '@/features/base/components/Layoyut'
import { Pagination } from '@/features/base/components/Pagination'
import { PostCardList } from '@/features/post/Components/PostCardList'
import { usePostList } from '@/features/post/hooks/usePostList'
import React from 'react'

const Page = () => {
  const{posts} = usePostList();
  return (
    <Layoyut>
      Page
    </Layoyut>
  )
}

export default Page