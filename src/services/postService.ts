import {
    DeleteResponse,
    LikePostRequest,
    PostCommentDeleteDTO,
    PostCommentDTO,
    PostCommentSaveDTO,
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

export const sendPostComment = async (request: PostCommentSaveDTO) => {
    try {
        return await post<PostCommentDTO, PostCommentSaveDTO>(
            '/sendPostCommentByUsingPOST',
            request,
        );
    } catch (e) {
        throw new Error((e as Error).message);
    }
};

export const deletePostComment = async (request: PostCommentDeleteDTO) => {
    try {
        return await post<DeleteResponse, PostCommentDeleteDTO>(
            '/deletePostCommentByUsingPOST',
            request,
        );
    } catch (e) {
        throw new Error((e as Error).message);
    }
};
