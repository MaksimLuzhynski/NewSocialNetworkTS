import React, { ChangeEvent } from 'react';
import { PostsType } from '../../../redux/profile-reducer';
import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPost: (text: string) => void
    addPost: () => void
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(post =>
        <Post
            message={post.message}
            likeCounter={post.likeCounter}
        />)

    let onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value;
        props.updateNewPost(text);
    }

    let onAddPost = () => {
        props.addPost();
    }


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}