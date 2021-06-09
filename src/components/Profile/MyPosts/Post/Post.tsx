import React from 'react';
import classes from './Post.module.css';

export function Post() {
    return (
        <div className={classes.item}>
            <img src='https://photopict.ru/wp-content/uploads/2018/12/prikol-nye-kartinki-na-avatarku-dlya-muzhchin-35-foto-26.jpg' />
            post1
            <span>like</span>
        </div>
    )
}