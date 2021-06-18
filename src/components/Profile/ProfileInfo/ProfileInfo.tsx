import React from 'react';
import classes from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img height="700px" src="https://st3.depositphotos.com/10654668/15053/i/600/depositphotos_150535932-stock-photo-one-yellow-tulip.jpg" />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}