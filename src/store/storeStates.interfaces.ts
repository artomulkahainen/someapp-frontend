import { UserDTO } from '../services/api';

export interface IUserDataState {
    user: { loggedIn: boolean } & UserDTO;
}
