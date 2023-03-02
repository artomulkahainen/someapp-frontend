import { PostDTO, UserDTO } from '../services/api';

export interface IUserDataState {
    user: { loggedIn: boolean } & UserDTO;
}

export interface IPostsState {
    posts: PostDTO[];
}
