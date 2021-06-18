import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}> {/* очень важно поставить пробел между кавычками */}
                    <NavLink to="/dialogs/1"> Max</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2"> Ales</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3"> Bob</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4"> Marta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">  Victor</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}> hi  </div>
                <div className={classes.message}> feerfe  </div>
                <div className={classes.message}> Maefefx  </div>
                <div className={classes.message}> Mefefax  </div>
            </div>
        </div>)
}