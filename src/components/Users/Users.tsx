import React from "react";
import { UsersType } from "../../redux/users-reducer";
import classes from './Users.module.css';

type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void                     //?????
    unfollow: (userId: number) => void                     //?????
    setUsers: (users: Array<UsersType>) => void
}

export function Users(props: UsersPropsType) {
    debugger

    if (props.users.length === 0) {
        debugger
        props.setUsers([
            { id: 0, followed: false, fullName: "Max", status: "I am superStar!", location: { country: "Belarus", city: "Minsk" }, photoUrl: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg' },
            { id: 1, followed: true, fullName: "Bob", status: "I am boss.", location: { country: "USA", city: "Cincinnati " }, photoUrl: 'https://www.meme-arsenal.com/memes/4d29034ab4779d515bcc93f977cf4f8f.jpg' },
            { id: 2, followed: false, fullName: "Margo", status: "I like you.", location: { country: "German", city: "Hamburg" }, photoUrl: 'https://sunmag.me/wp-content/uploads/2019/11/sunmag-004-small-avatar.png' },
        ])
    }

    return (
        <div className={classes.item}>
            {
                props.users.map(item => <div key={item.id} className={classes.userPhoto}>
                    <span>
                        <div>
                            <img src={item.photoUrl} />
                        </div>
                        <div>
                            {item.followed
                                ? <button onClick={() => { props.unfollow(item.id) }}>Follow</button>
                                : <button onClick={() => { props.follow(item.id) }}>Unfollow</button>}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{item.fullName}</div>
                            <div>{item.status}</div>
                        </span>
                        <span>
                            <div>{item.location.country}</div>
                            <div>{item.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>)
}



