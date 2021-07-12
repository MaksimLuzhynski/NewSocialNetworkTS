import { ActionsTypes, AddPostActionType, PostsType, ProfilePageType, UpdateNewPostTextActionType } from "./state";


let initialState= {
    posts: [
        { id: 0, message: "Hey!", likeCounter: 0 },
        { id: 1, message: "How are you?", likeCounter: 15 },
        { id: 2, message: "Hellow", likeCounter: 3 },
        { id: 3, message: "Yo!!!", likeCounter: 37 },
    ],
    newPostText: "Новое сообщение",
};

const profileReducer = (state: ProfilePageType=initialState, action: ActionsTypes) => {

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