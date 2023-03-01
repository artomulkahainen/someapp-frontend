import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOwnUserData } from '../services/userService';
import { IUserDataState } from './storeStates.interfaces';

export const getOwnUserDataThunk = createAsyncThunk(
    'userData/getOwnUserData',
    async () => {
        return await getOwnUserData();
    },
);

const initialState = {
    user: {
        uuid: '',
        username: '',
        admin: false,
        loggedIn: false,
    },
} as IUserDataState;

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        clearUserData: (state) => {
            state.user = initialState.user;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getOwnUserDataThunk.fulfilled, (state, action) => {
            state.user = { ...action.payload, loggedIn: true };
        });
    },
});

export const { clearUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
