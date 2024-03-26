import React, { useEffect, useState } from "react";
import './Posts.scss'
import { postsApi } from "../api/postsApi.ts";
import { Post } from "../../../widgets/post/UI/PostItem.tsx";
import { IPost } from "../types/index.ts";
import { LoadingInfo } from "../../../shared/loading/LoadingInfo.tsx";

export const Posts: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [fetching, setFetching] = useState<boolean>(true)
  const { data: postsList, isLoading } = postsApi.useFetchAllPostsQuery({ limit: 10, page: currentPage })
  const [posts, setPosts] = useState<IPost[] | undefined>([])

  useEffect(() => {
    if (fetching&&postsList) {
      setCurrentPage(prev => prev + 1)
      setPosts([...posts!, ...postsList])
      setFetching(false)
    }
  }, [fetching, postsList])

  useEffect(() => {
    window.addEventListener('scroll', scrollHeandler);
    return () => {
      window.removeEventListener('scroll', scrollHeandler);
    };
  }, []);

  const scrollHeandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1) {
      setFetching(true)
    }
  };

  return (
    <div>
      {isLoading && <LoadingInfo />}
      <ul className="posts">
        {posts?.map(post =>
          <li key={post.id}><Post post={post} /></li>
        )}
      </ul>
    </div>
  );
};
