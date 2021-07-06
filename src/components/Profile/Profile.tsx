import React from 'react';
import { ActionsTypes, PostsType } from '../../redux/state';
import { MyPosts } from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type ProfilePropsType={
    posts:Array<PostsType>
    newPostText:string
    dispatch:(action:ActionsTypes)=>void
}

export function Profile(props:ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
             posts={props.posts}
             dispatch={props.dispatch}
             newPostText={props.newPostText}
             />
        </div>
    )
}