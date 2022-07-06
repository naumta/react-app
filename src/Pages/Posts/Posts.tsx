import React, { useEffect, useState } from 'react'
import { Spinner } from '../../Components/Spinner/Spinner';
import http from '../../http';
import { IPost } from './IPost'
import { PostCard } from './PostCard';

export const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        http.get(`posts`).then((res) => {
            setPosts(res.data);
            //console.log(res.data);
        });
    }

    const deletePost = (id: IPost["id"]) => {
        const isDeletePost = window.confirm("Really delete this post?");
        if(isDeletePost) {
            setPosts(posts.filter((post) => post.id !== id));
        }
    }
    
    return (
        <>
        <h1 className='mt-3'>Posts</h1>
        {posts.length
        ?
        <PostCard posts={posts} deletePost={deletePost} />
        :
        <Spinner />
        }
        </>
    );
}
