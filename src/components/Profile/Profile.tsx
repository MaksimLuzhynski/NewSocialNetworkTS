import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import classes from './Profile.module.css'

export function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img height="700px" src="https://st3.depositphotos.com/10654668/15053/i/600/depositphotos_150535932-stock-photo-one-yellow-tulip.jpg" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}