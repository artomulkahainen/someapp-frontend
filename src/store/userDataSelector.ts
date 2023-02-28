import { IRootState } from './store';

export const selectLoggedInUser = (state: IRootState) => state.userData.user;
