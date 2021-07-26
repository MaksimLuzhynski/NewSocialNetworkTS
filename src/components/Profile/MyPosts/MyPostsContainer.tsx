import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { MyPosts } from './MyPosts';


// export function MyPostsContainer() {

//     return <StoreContext.Consumer>{
//         (store: any) => {                           //ТИПИЗАЦИЯ!!!

//             let addPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }

//             let onPostChange = (text: string) => {
//                 store.dispatch(updateNewPostTextActionCreator(text));
//             }

//             return <MyPosts
//                 addPost={addPost}
//                 updateNewPost={onPostChange}
//                 posts={store.getState().profilePage.posts}
//                 newPostText={store.getState().profilePage.newPostText}
//             />
//         }
//     }
//     </StoreContext.Consumer>
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: any) => {                  //ТИПИЗИРОВАТЬ !!!
    return {
        addPost: () => { dispatch(addPostActionCreator()) },
        updateNewPost: (text: string) => { dispatch((updateNewPostTextActionCreator(text))) },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

