import {
    DeleteResponse,
    LikePostRequest,
    PostDTO,
    PostLikeDTO,
    UnlikePostRequest,
} from './api';
import { get, post } from './serviceFunctions';

export const getPostsByRelationships = async () => {
    try {
        return await get<PostDTO[]>('/getPostsByRelationshipsByUsingGET');
    } catch (e) {
        throw new Error((e as Error).message);
    }
};

export const likePost = async (request: LikePostRequest) => {
    try {
        return await post<PostLikeDTO, LikePostRequest>(
            '/likePostByUsingPOST',
            request,
        );
    } catch (e) {
        throw new Error((e as Error).message);
    }
};

export const unlikePost = async (request: UnlikePostRequest) => {
    try {
        return await post<DeleteResponse, UnlikePostRequest>(
            '/unlikePostByUsingPOST',
            request,
        );
    } catch (e) {
        throw new Error((e as Error).message);
    }
};
