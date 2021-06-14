import React from 'react';
import classes from './MyPosts.module.css';
import { Post } from './Post/Post';

export function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <div>
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