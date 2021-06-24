import React from 'react';
import { PostsType } from '../../redux/state';
import { MyPosts } from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type ProfilePropsType={
    posts:Array<PostsType>
    AddNewPost:any
}

export function Profile(props:ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
             posts={props.posts}
             AddNewPost={props.AddNewPost}
             />
        </div>
    )
}