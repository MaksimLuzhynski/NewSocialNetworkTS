import React from 'react';
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store';
import { followUserActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowUserActionCreator, UsersType } from '../../redux/users-reducer';
import { Dispatch } from 'redux'
import { Users} from './Users';

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => { dispatch(followUserActionCreator(userId)) },
        unfollow: (userId: number) => { dispatch(unfollowUserActionCreator(userId)) },
        setUsers: (users: Array<UsersType>) => { dispatch(setUsersActionCreator(users)) },
        setCurrentPage:(pageNumber:number)=>{dispatch(setCurrentPageActionCreator(pageNumber))},
        setTotalUsersCount:(totalCount:number)=>{dispatch(setTotalUsersCountActionCreator(totalCount))},
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);