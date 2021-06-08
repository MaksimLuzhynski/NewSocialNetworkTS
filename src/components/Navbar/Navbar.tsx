import React from 'react';
import { isTemplateExpression } from 'typescript';
import classes from './Navbar.module.css'

export function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><a>Profile</a></div>
            <div className={classes.item}><a>Messanges</a></div>
            <div className={classes.item}><a>News</a></div>
            <div className={classes.item}><a>Music</a></div>
            <div className={classes.item}><a>Settings</a></div>
        </nav>
    )
}