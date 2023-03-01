import { RootState } from './store';

export const selectLoggedInUser = (state: RootState) => state.userData.user;
