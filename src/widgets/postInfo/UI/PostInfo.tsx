import React from "react";
import './PostInfo.scss'
import { useNavigate, useParams } from "react-router-dom";
import { postsApi } from "../../../entities/posts/api/postsApi.ts";
import { Button } from "../../../shared/button/Button.tsx";
import { LoadingInfo } from "../../../shared/loading/LoadingInfo.tsx";

export const PostInfo = () => {
    const { id } = useParams()
    const { data, isLoading } = postsApi.useFetchPostByIdQuery(Number(id));
    const navigate = useNavigate()

    if (isLoading) return <LoadingInfo />

    return (
        <main className="postInfo">
            <h3 className="postInfo__title"> {data?.id} {data?.title}</h3>
            <p className="postInfo__body">{data?.body}</p>
            <div className="postInfo__button" onClick={() => { navigate('/Posts') }}>
                <Button>Назад</Button>
            </div>
        </main>
    );
};