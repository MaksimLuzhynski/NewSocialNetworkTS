import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { UsersType } from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.item}>
            <div>
                {pages.map(item => {
                    return <span
                        onClick={() => { props.onPageChanged(item) }}
                        className={props.currentPage === item ? classes.selectedPage : ""}>
                        {item} </span>
                })}
            </div>
            {
                props.users.map(item => <div key={item.id} className={classes.userPhoto}>
                    <span>
                        <div>
                            <img src={item.photos.small != null ? item.photos.small : userPhoto} />
                        </div>
                        <div>
                            {item.followed
                                ? <button onClick={() => { props.unfollow(item.id) }}>Follow</button>
                                : <button onClick={() => { props.follow(item.id) }}>Unfollow</button>}
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