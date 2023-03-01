import { LoginRequest, UserDTO } from './api';
import { JWTResponse } from './api/JWTResponse';
import { get, post } from './serviceFunctions';

export const saveNewUser = async (username: string, password: string) => {
    try {
        await post(`/saveNewUserByUsingPOST`, {
            username,
            password,
        });
    } catch (e) {
        throw new Error((e as Error).message);
    }
};

export const loginUser = async (loginRequest: LoginRequest) => {
    try {
        return await post<JWTResponse, LoginRequest>(
            `/loginByUsingPOST`,
            loginRequest,
        );
    } catch (e) {
        throw new Error((e as Error).message);
    }
};

export const getOwnUserData = async () => {
    try {
        return await get<UserDTO>(`/findOwnUserDetailsByUsingGET`);
    } catch (e) {
        throw new Error((e as Error).message);
    }
};
