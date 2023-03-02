import reducer from '../postsSlice';

test('posts fetch', () => {
    let state;
    state = reducer(
        {
            posts: [],
        },
        {
            type: 'posts/getFriendsPosts/fulfilled',
            payload: [
                {
                    uuid: '1',
                    username: 'Arto',
                    post: 'Lorem ipsum upsum pumsun, halitum kalitum kalikalikaa.Lorem ipsum upsum pumsun, halitum kalitum kalikalikaa.Lorem ipsum upsum pumsun, halitum kalitum kalikalikaa.',
                    userUuid: '12433536',
                    createdDate: '2021-10-10',
                },
                {
                    uuid: '2',
                    username: 'Arto',
                    post: 'Lorem ipsum upsum pumsun, halitum kalitum kalikalikaa.Lorem ipsum upsum pumsun, halitum kalitum kalikalikaa.Lorem ipsum upsum pumsun, halitum kalitum kalikalikaa.',
                    userUuid: '12433536',
                    createdDate: '2021-10-10',
                },
            ],
            meta: {
                requestId: '-Yc_t1cCQdypysQwY6dWG',
                requestStatus: 'fulfilled',
            },
        },
    );
    expect(state.posts.length).toBe(2);
});

/* test('userData clear', () => {
    let state;
    state = reducer(
        {
            user: {
                uuid: '30670567-9e58-432b-9b17-93327110b2b3',
                createdDate: '2023-02-28T17:50:42.463+00:00',
                username: 'tunnus',
                admin: false,
                posts: [],
                likedPostsIds: [],
                relationships: [],
                loggedIn: true,
            },
        },
        {
            type: 'userData/clearUserData',
            meta: {
                requestId: '-Yc_t1cCQdypysQwY6dWG',
                requestStatus: 'fulfilled',
            },
        },
    );
    expect(state).toEqual({
        user: {
            uuid: '',
            username: '',
            admin: false,
            loggedIn: false,
        },
    });
}); */
