import axios from 'axios';
import { LoginRequest } from './api';
import { JWTResponse } from './api/JWTResponse';
import { baseApi } from './serviceConfig';

export const saveNewUser = async (
    username: string,
    password: string,
): Promise<void> => {
    try {
        await axios.post(`${baseApi}/saveNewUserByUsingPOST`, {
            username,
            password,
        });
    } catch (e) {
        throw new Error((e as Error).message);
    }
};

export const loginUser = async (
    loginRequest: LoginRequest,
): Promise<JWTResponse> => {
    try {
        return await axios.post(`${baseApi}/loginByUsingPOST`, loginRequest);
    } catch (e) {
        throw new Error((e as Error).message);
    }
};
