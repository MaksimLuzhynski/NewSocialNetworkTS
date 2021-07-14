import React from 'react';
import { PostsType } from '../../../redux/state';
import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPost: (text: string) => void
    addPost: () => void
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(post => <Post message={post.message} likeCounter={post.likeCounter} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        if (newPostElement.current) {
            props.addPost();
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPost(text);
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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