import React from 'react';
import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

type PostDataType = {
    id: number
    message: string
    likeCounter: number
}

let PostData: Array<PostDataType> = [
    { id: 0, message: "Hey!", likeCounter: 0 },
    { id: 1, message: "How are you?", likeCounter: 15 },
    { id: 2, message: "Hellow", likeCounter: 3 },
    { id: 3, message: "Yo!!!", likeCounter: 37 },
]
//типизация???
let postsElements = PostData.map(post => <Post message={post.message} likeCounter={post.likeCounter} />)

export function MyPosts() {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}