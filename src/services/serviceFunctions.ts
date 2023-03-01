import axios from 'axios';
import { baseApi } from './serviceConfig';

interface IRequestParam {
    key: string;
    value: string;
}

const requestParamBuilder = (
    firstParam?: IRequestParam,
    secondParam?: IRequestParam,
    thirdParam?: IRequestParam,
) => {
    return `${firstParam ? `?${firstParam.key}=${firstParam.value}` : ''}${
        firstParam && secondParam
            ? `&${secondParam.key}=${secondParam.value}`
            : ''
    }${
        firstParam && secondParam && thirdParam
            ? `&${thirdParam.key}=${thirdParam.value}`
            : ''
    }`;
};

export const get = async <T>(
    url: string,
    firstParam?: { key: string; value: string },
    secondParam?: { key: string; value: string },
    thirdParam?: { key: string; value: string },
): Promise<T> => {
    try {
        return (
            await axios.get(
                `${baseApi}${url}${requestParamBuilder(
                    firstParam,
                    secondParam,
                    thirdParam,
                )}`,
            )
        ).data;
    } catch (e) {
        throw new Error((e as Error).message);
    }
};

export const post = async <T, V>(url: string, body: V): Promise<T> => {
    try {
        return (await axios.post(`${baseApi}${url}`, body)).data;
    } catch (e) {
        throw new Error((e as Error).message);
    }
};
