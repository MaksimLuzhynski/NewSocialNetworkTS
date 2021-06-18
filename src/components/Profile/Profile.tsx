import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export function Profile() {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}