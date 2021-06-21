import React from 'react';
import { PostDataType } from '../../index';
import { MyPosts } from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type ProfilePropsType={
    PostData:Array<PostDataType>
}

export function Profile(props:ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts PostData={props.PostData}/>
        </div>
    )
}