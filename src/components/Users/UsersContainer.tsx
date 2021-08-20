import React from 'react';
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store';
import { followUserActionCreator, setUsersActionCreator, unfollowUserActionCreator, UsersType } from '../../redux/users-reducer';
import { Dispatch } from 'redux'
import { Users} from './Users';

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => { dispatch(followUserActionCreator(userId)) },
        unfollow: (userId: number) => { dispatch(unfollowUserActionCreator(userId)) },
        setUsers: (users: Array<UsersType>) => { dispatch(setUsersActionCreator(users)) },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);