export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: LocationType
    photos: any                                        //ТИПИЗИРОВАТЬ!!!
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
export type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    pageNumber: number
}
export type SetTotalUsersCountActionType = {
    type: 'SET-TOTAL-USERS-COUNT'
    count: number
}
export type SetToggleIsFetchingActionType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}

type initialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: initialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state: UsersPageType = initialState, action:
    | FollowUserActionType
    | UnfollowUserActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | SetToggleIsFetchingActionType) => {

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
                users: action.users,
            }

        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.pageNumber,
            }

        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.count,
            }

        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
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
export const setCurrentPageActionCreator = (pageNumber: number): SetCurrentPageActionType => (
    {
        type: 'SET-CURRENT-PAGE',
        pageNumber
    }
)
export const setTotalUsersCountActionCreator = (totalUsersCount: number): SetTotalUsersCountActionType => (
    {
        type: 'SET-TOTAL-USERS-COUNT',
        count: totalUsersCount
    }
)
export const setToggleIsFetchingActionCreator = (isFetching: boolean): SetToggleIsFetchingActionType => (
    {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    }
)

export default usersReducer;