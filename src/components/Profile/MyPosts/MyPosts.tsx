import React from 'react';
import { PostsType } from '../../../redux/state';
import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

type MyPostsPropsType = {
    posts: Array<PostsType>
    AddNewPost:any
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(post => <Post message={post.message} likeCounter={post.likeCounter} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.AddNewPost(text);
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}