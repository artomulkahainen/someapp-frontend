import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LikePostRequest, UnlikePostRequest } from '../services/api';
import {
    getPostsByRelationships,
    likePost,
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
    },
});

export const { clearPosts } = postsSlice.actions;

export default postsSlice.reducer;
