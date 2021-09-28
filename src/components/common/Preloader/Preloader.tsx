import React from "react";
import preloader from './../../../assets/images/preloader.gif'

type PreloaderPropsType = {

}

export function Preloader(props: PreloaderPropsType) {
    return (<div>
        <img src={preloader} />
    </div>)
}