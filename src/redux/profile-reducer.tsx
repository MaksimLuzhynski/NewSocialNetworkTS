export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type PostsType = {
    id: number
    message: string
    likeCounter: number
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type initialStateType = {
    posts: Array<PostsType>
    newPostText: string
}

let initialState: initialStateType = {
    posts: [
        { id: 0, message: "Hey!", likeCounter: 0 },
        { id: 1, message: "How are you?", likeCounter: 15 },
        { id: 2, message: "Hellow", likeCounter: 3 },
        { id: 3, message: "Yo!!!", likeCounter: 37 },
    ],
    newPostText: "Новое сообщение",
};

const profileReducer = (state: ProfilePageType = initialState, action: AddPostActionType | UpdateNewPostTextActionType) => {

    switch (action.type) {

        // case 'ADD-POST':
        //     const newPost: PostsType = {
        //         id: 4,
        //         message: state.newPostText,
        //         likeCounter: 0,
        //     }
        //     stateCopy.posts.push(newPost);
        //     stateCopy.newPostText = "";
        //     return stateCopy;

        // case 'UPDATE-NEW-POST-TEXT':
        //     stateCopy.newPostText = action.newText;
        //     return stateCopy;

        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText,
            }

        case 'ADD-POST':
            const newPost: PostsType = {
                id: 4,
                message: state.newPostText,
                likeCounter: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }

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