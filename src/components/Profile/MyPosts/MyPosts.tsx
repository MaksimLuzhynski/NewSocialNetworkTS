import React from 'react';
import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

type PostDataType={
    id:number
    message:string
    likeCounter: number
}

let PostData:Array<PostDataType> = [
    { id: 0, message: "Hey!", likeCounter: 0 },
    { id: 1, message: "How are you?", likeCounter: 15 },
    { id: 2, message: "Hellow", likeCounter: 3 },
    { id: 3, message: "Yo!!!", likeCounter: 37 },
]

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
                    <Post message={PostData[0].message} likeCounter={PostData[0].likeCounter} />
                    <Post message={PostData[1].message} likeCounter={PostData[1].likeCounter} />
                    <Post message={PostData[2].message} likeCounter={PostData[2].likeCounter} />
                    <Post message={PostData[3].message} likeCounter={PostData[3].likeCounter} />
                </div>
            </div>
        </div>
    )
}