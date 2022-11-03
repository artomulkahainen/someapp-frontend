import axios from 'axios';
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
        console.error(e);
    }
};
