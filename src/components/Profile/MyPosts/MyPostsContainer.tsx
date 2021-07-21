import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import { MyPosts } from './MyPosts';


export function MyPostsContainer() {

    return <StoreContext.Consumer>{
        (store: any) => {                           //ТИПИЗАЦИЯ!!!

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }

            let onPostChange = (text: string) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            }

            return <MyPosts
                addPost={addPost}
                updateNewPost={onPostChange}
                posts={store.getState().profilePage.posts}
                newPostText={store.getState().profilePage.newPostText}
            />
        }
    }
    </StoreContext.Consumer>
}

