import React from 'react';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


export function Profile() {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}