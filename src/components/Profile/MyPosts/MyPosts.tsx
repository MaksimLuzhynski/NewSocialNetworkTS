import React from 'react';
import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

export function MyPosts() {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={classes.posts}>
                    <Post
                        message="Hey!"
                        likeCounter={0}
                    />
                    <Post
                        message="How are you?"
                        likeCounter={15}
                    />
                    <Post
                        message="Hellow"
                        likeCounter={3}
                    />
                    <Post
                        message="Yo!!!"
                        likeCounter={37}
                    />
                </div>
            </div>
        </div>
    )
}