import React from 'react';
import reportWebVitals from './reportWebVitals';
import { rerenderIntireTree } from './render';
import { state } from './redux/state';



rerenderIntireTree(state);

reportWebVitals();
