import React from "react";
import './PostItem.scss'
import {useNavigate} from "react-router";
import {IPost} from "../../../entities/posts/types/index.ts";
import { Button } from "../../../shared/button/Button.tsx";

type PropsType={
  post?:IPost
}

export const Post = ({post}:PropsType) => {

  const navigate=useNavigate()

  return (
      <div className="post">
        <div className="post__title"> {post?.id} {post?.title}</div>
        <div className="post__body"> {post?.body} </div>
        <div className="post__button"  onClick={()=>{navigate(`/Posts/posts/${post?.id}`)}}>
            <Button>К посту</Button>
        </div>

      </div>
  );
};

//  {Number(post?.body.length)>100?post?.body.substring(0,100)+'...':post?.body}