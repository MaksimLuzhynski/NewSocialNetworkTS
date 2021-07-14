import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { ActionsTypes, PostsType } from '../../../redux/state';
import { MyPosts } from './MyPosts';


type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export function MyPostsContainer(props: MyPostsPropsType) {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text: string) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPost={onPostChange}
            posts={props.posts}
            newPostText={props.newPostText}
        />
    )
}