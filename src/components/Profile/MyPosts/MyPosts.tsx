import React from 'react';
import { PostDataType } from '../../../index';
import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

type MyPostsPropsType={
    PostData:Array<PostDataType>
}

export function MyPosts(props:MyPostsPropsType) {
    
    //типизация???
    let postsElements = props.PostData.map(post => <Post message={post.message} likeCounter={post.likeCounter} />)

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