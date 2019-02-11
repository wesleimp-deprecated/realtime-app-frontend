export const Types = {
    ADD_POST: 'post/ADD_POST',
}

const INITIAL_STATE = {
    items: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_POST:
            return {
                items: [action.payload.post, ...state.items]
            }
        default:
            state;
    }
}

export const Creators = {
    addPost: (post) => ({
        type: Types.ADD_POST,
        payload: post
    }),
}