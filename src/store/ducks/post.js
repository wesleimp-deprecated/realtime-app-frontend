// Types
export const Types = {
	GET_POST_REQUEST: "post/GET_POST_REQUEST",
	GET_POST_SUCCESS: "post/GET_POST_SUCCESS",
	GET_POST_ERROR: "post/GET_POST_ERROR",
	ADD_POST: "post/ADD_POST",
	
};

const INITIAL_STATE = { 
	items: [], 
	error: "" 
};

export default function(state = INITIAL_STATE, action) {
	console.log(action.payload);
	switch (action.type) {
		case Types.GET_POST_SUCCESS:
			return {
				...state,
				items: action.payload.posts
			};
		case Types.GET_POST_ERROR:
			return {
				...state, error: action.payload.message
			}
		case Types.ADD_POST:
			return {
				items: [action.payload.post, ...state.items]
			};
		default:
			return state;
	}
}

// Creators
export const Creators = {
	getPostRequest: () => ({
		type: Types.GET_POST_REQUEST
	}),
	getPostSuccess: posts => ({
		type: Types.GET_POST_SUCCESS,
		payload: posts
	}),
	getPostError: message => ({
		type: Types.GET_POST_ERROR,
		payload: {message}
	}),
	addPost: post => ({
		type: Types.ADD_POST,
		payload: {post}
	}),
};
