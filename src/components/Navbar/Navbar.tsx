import React from 'react';
import { isTemplateExpression } from 'typescript';
import classes from './Navbar.module.css'

export function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><a href="/profile">Profile</a></div>
            <div className={classes.item}><a href="/dialogs">Messanges</a></div>
            <div className={classes.item}><a href="/news">News</a></div>
            <div className={classes.item}><a href="/music">Music</a></div>
            <div className={classes.item}><a href="/settings">Settings</a></div>
        </nav>
    )
}