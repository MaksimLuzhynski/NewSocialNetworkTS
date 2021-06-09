import React from 'react';
import classes from './Post.module.css';

type PostPropsType={
    message:string
    likeCounter:string
}

export function Post(props:PostPropsType) {
    return (
        <div className={classes.item}>
            <img src='https://photopict.ru/wp-content/uploads/2018/12/prikol-nye-kartinki-na-avatarku-dlya-muzhchin-35-foto-26.jpg' />
            {props.message}
           <div>{props.likeCounter}</div>
        </div>
    )
}