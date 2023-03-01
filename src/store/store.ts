// file: store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import userDataReducer from './userDataSlice';

const reducer = combineReducers({
    userData: userDataReducer,
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
