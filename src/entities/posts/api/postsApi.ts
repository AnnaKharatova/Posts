import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../types/index.ts'

export const postsApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], { limit: number, page: number }>({
      query: ({ limit = 7, page = 0 }) => ({
        url: '/posts',
        params: {
          _limit: limit,
          _page: page,
        }
      })
    }),
    fetchPostById: build.query<IPost, number>({
      query: (id: number) => ({
        url: `/posts/${id}`,
      })
    })
  })
})


export const { useFetchAllPostsQuery, useFetchPostByIdQuery, useLazyFetchAllPostsQuery } = postsApi