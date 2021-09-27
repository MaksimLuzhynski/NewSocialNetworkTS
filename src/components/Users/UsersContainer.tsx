import React from 'react';
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store';
import { followUserActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowUserActionCreator, UsersType } from '../../redux/users-reducer';
import { Dispatch } from 'redux'
import axios from "axios";
import { Users } from "./Users";

type UsersAPIComponentPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export class UsersContainer extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
        />
    }
}

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
        setCurrentPage: (pageNumber: number) => { dispatch(setCurrentPageActionCreator(pageNumber)) },
        setTotalUsersCount: (totalCount: number) => { dispatch(setTotalUsersCountActionCreator(totalCount)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);