import reducer from '../userDataSlice';

test('userData add', () => {
    let state;
    state = reducer(
        {
            user: {
                uuid: '',
                username: '',
                admin: false,
                loggedIn: false,
            },
        },
        {
            type: 'userData/getOwnUserData/fulfilled',
            payload: {
                uuid: '30670567-9e58-432b-9b17-93327110b2b3',
                createdDate: '2023-02-28T17:50:42.463+00:00',
                username: 'tunnus',
                admin: false,
                posts: [],
                likedPostsIds: [],
                relationships: [],
            },
            meta: {
                requestId: '-Yc_t1cCQdypysQwY6dWG',
                requestStatus: 'fulfilled',
            },
        },
    );
    expect(state).toEqual({
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
    });
});

test('userData clear', () => {
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
});
