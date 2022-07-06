import React from 'react'
import { IPost } from './IPost'

export const PostCard = ({posts, deletePost}: {posts: IPost[], deletePost: (id: number) => void 
}) => {
    return (
    <div className="row row-cols-1 row-cols-md-4 g-4 m-3">
        {posts.length
            ?
            posts.map(post => 
                <div className="col" key={post.id}>
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                            Title: {post.title}</h5>
                            <p className="card-text">Title: {post.body}</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" 
                                className="btn btn-danger" 
                                onClick={() => deletePost(post.id)}>Remove post
                            </button>
                        </div>
                    </div>
                </div>)
                :
                <h2>Posts no found</h2>
        }
    </div>
    );
}
