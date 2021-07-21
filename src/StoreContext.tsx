import React from 'react';
import { AppStateType } from './redux/redux-store';
import { StoreType } from './redux/state';

export type ProviderPropsType = {
    store: any                               //AppStateType  ТИПИЗИРОВАТЬ !!!
    children: React.ReactNode
}

const StoreContext = React.createContext({} as AppStateType);

export const Provider = (props: ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;