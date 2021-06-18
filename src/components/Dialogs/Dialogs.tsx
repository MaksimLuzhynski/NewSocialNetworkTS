import React from 'react'
import classes from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}> Max  </div> {/* очень важно поставить пробел между кавычками */}
                <div className={classes.dialog}> Ales  </div>
                <div className={classes.dialog}> Bob  </div>
                <div className={classes.dialog}> Marta  </div>
                <div className={classes.dialog}> Victor  </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}> hi  </div>
                <div className={classes.message}> feerfe  </div>
                <div className={classes.message}> Maefefx  </div>
                <div className={classes.message}> Mefefax  </div>
            </div>
        </div>)
}