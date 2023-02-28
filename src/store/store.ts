// file: store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import { IUserDataState } from './storeStates.interfaces';

import userDataReducer from './userDataSlice';

export interface IRootState {
    userData: IUserDataState;
}

const reducer = combineReducers<IRootState>({
    userData: userDataReducer,
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
