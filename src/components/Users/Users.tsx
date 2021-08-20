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
}

export class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        return (
            <div className={classes.item}>
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

