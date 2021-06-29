import React from 'react';
import { PostsType } from '../../redux/state';
import { MyPosts } from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type ProfilePropsType={
    posts:Array<PostsType>
    AddNewPost: () => void
    newPostText:string
    UpdateNewPostText: (newText: string) => void
}

export function Profile(props:ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
             posts={props.posts}
             AddNewPost={props.AddNewPost}
             newPostText={props.newPostText}
             UpdateNewPostText={props.UpdateNewPostText}
             />
        </div>
    )
}