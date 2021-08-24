import React from "react";
import axios from "axios";
import { UsersType } from "../../redux/users-reducer";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

type UsersPropsType = {
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

export class Users extends React.Component<UsersPropsType> {

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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={classes.item}>
                <div>
                    {pages.map(item => {
                        return <span
                            onClick={() => { this.onPageChanged(item) }}
                            className={this.props.currentPage === item ? classes.selectedPage : ""}>
                            {item} </span>
                    })}
                </div>
                {
                    this.props.users.map(item => <div key={item.id} className={classes.userPhoto}>
                        <span>
                            <div>
                                <img src={item.photos.small != null ? item.photos.small : userPhoto} />
                            </div>
                            <div>
                                {item.followed
                                    ? <button onClick={() => { this.props.unfollow(item.id) }}>Follow</button>
                                    : <button onClick={() => { this.props.follow(item.id) }}>Unfollow</button>}
                            </div>
                        </span>

                        <span>
                            <span>
                                <div>{item.name}</div>
                                <div>{item.status}</div>
                            </span>
                            <span>
                                <div>{"item.location.country"}</div>
                                <div>{"item.location.city"}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>)
    }
}

