import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LikePostRequest } from '../services/api';
import { getPostsByRelationships, likePost } from '../services/postService';
import { IPostsState } from './storeStates.interfaces';

export const getFriendsPosts = createAsyncThunk(
    'posts/getFriendsPosts',
    async () => {
        return await getPostsByRelationships();
    },
);

export const likePostThunk = createAsyncThunk(
    'posts/likePost',
    async (request: LikePostRequest) => {
        return await likePost(request);
    },
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
                ?.postLikerIds?.push('new');
        });
    },
});

export const { clearPosts } = postsSlice.actions;

export default postsSlice.reducer;
