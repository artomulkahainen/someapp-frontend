import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    LikePostRequest,
    PostCommentDeleteDTO,
    PostCommentSaveDTO,
    UnlikePostRequest,
} from '../services/api';
import {
    deletePostComment,
    getPostsByRelationships,
    likePost,
    sendPostComment,
    unlikePost,
} from '../services/postService';
import { IPostsState } from './storeStates.interfaces';

export const getFriendsPosts = createAsyncThunk(
    'posts/getFriendsPosts',
    async () => await getPostsByRelationships(),
);

export const likePostThunk = createAsyncThunk(
    'posts/likePost',
    async (request: LikePostRequest) => await likePost(request),
);

export const unlikePostThunk = createAsyncThunk(
    'posts/unlikePost',
    async (request: UnlikePostRequest) => await unlikePost(request),
);

export const sendPostCommentThunk = createAsyncThunk(
    'posts/sendPostComment',
    async (request: PostCommentSaveDTO) => await sendPostComment(request),
);

export const deletePostCommentThunk = createAsyncThunk(
    'posts/deletePostComment',
    async (request: PostCommentDeleteDTO) => await deletePostComment(request),
);

const initialState = {
    posts: [],
} as IPostsState;

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        clearPosts: (state) => {
            state.posts = initialState.posts;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getFriendsPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        });
        builder.addCase(likePostThunk.fulfilled, (state, action) => {
            state.posts
                .find((post) => post.uuid === action.payload.postId)
                ?.postLikerIds?.push(action.payload.likerId);
        });
        builder.addCase(unlikePostThunk.fulfilled, (state, action) => {
            const postToEdit = state.posts.find(
                (post) => post.uuid === action.payload.id,
            );

            if (postToEdit) {
                const newObj = { ...postToEdit };
                newObj.postLikerIds = postToEdit.postLikerIds?.filter(
                    (likerId) => likerId !== action.payload.actionUserId,
                );
                state.posts = state.posts.map((post) =>
                    post.uuid === postToEdit.uuid ? newObj : post,
                );
            }
        });
        builder.addCase(sendPostCommentThunk.fulfilled, (state, action) => {
            state.posts
                .find((post) => post.uuid === action.payload.postId)
                ?.postComments?.push(action.payload);
        });
        builder.addCase(deletePostCommentThunk.fulfilled, (state, action) => {
            const postToEdit = state.posts.find((post) =>
                post.postComments?.some(
                    (comment) => comment.uuid === action.payload.id,
                ),
            );

            if (postToEdit) {
                const newObj = { ...postToEdit };
                newObj.postComments = postToEdit.postComments?.filter(
                    (comment) => comment.uuid !== action.payload.id,
                );
                state.posts = state.posts.map((post) =>
                    post.uuid === postToEdit.uuid ? newObj : post,
                );
            }
        });
    },
});

export const { clearPosts } = postsSlice.actions;

export default postsSlice.reducer;
