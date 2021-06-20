import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'

type DialogItemPropsType = {
    name: string
    id: number
}

export function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}> {props.name}</NavLink>
        </div>)
}