import { ActionsTypes, AddPostActionType, PostsType, ProfilePageType, UpdateNewPostTextActionType } from "./state";


const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {

        case 'ADD-POST':
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0,
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostActionType => (
    { type: 'ADD-POST' }
)
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => (
    {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
)

export default profileReducer;