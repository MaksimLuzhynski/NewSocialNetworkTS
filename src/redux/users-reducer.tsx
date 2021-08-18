export type UsersPageType = {
    users: Array<UsersType>
}
export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
    photoUrl: string
}
export type LocationType = {
    country: string
    city: string
}
export type FollowUserActionType = {
    type: 'FOLLOW-USER'
    userID: number
}
export type UnfollowUserActionType = {
    type: 'UNFOLLOW-USER'
    userID: number
}
export type SetUsersActionType = {
    type: 'SET-USERS'
    users: Array<UsersType>                                
}

type initialStateType = {
    users: Array<UsersType>
}

let initialState: initialStateType = {
    users: []
};

const usersReducer = (state: UsersPageType = initialState, action: FollowUserActionType | UnfollowUserActionType|SetUsersActionType) => {

    debugger
    switch (action.type) {

        case 'FOLLOW-USER':
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userID) {
                        return { ...item, followed: true }
                    }
                    return item
                })
            }

        case 'UNFOLLOW-USER':
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userID) {
                        return { ...item, followed: false }
                    }
                    return item
                })
            }

        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users],
            }

        default:
            return state;
    }
}

export const followUserActionCreator = (userID: number): FollowUserActionType => (
    {
        type: 'FOLLOW-USER',
        userID
    }

)
export const unfollowUserActionCreator = (userID: number): UnfollowUserActionType => (
    {
        type: 'UNFOLLOW-USER',
        userID
    }
)
export const setUsersActionCreator = (users: Array<UsersType>): SetUsersActionType => (  
    {
        type: 'SET-USERS',
        users
    }
)

export default usersReducer;