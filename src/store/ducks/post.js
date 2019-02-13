// Types
export const Types = {
	GET_POST_REQUEST: "post/GET_POST_REQUEST",
	GET_POST_SUCCESS: "post/GET_POST_SUCCESS",
	GET_POST_ERROR: "post/GET_POST_ERROR",
	LIKE_POST_REQUEST: "post/LIKE_POST_REQUEST",
	LIKE_POST_SUCCESS: "post/LIKE_POST_SUCCESS",
	LIKE_POST_ERROR: "post/LIKE_POST_ERROR",
	ADD_POST: "post/ADD_POST",
};

const INITIAL_STATE = {
	items: [],
	error: ""
};

export default function (state = INITIAL_STATE, action) {
	//console.log(action.payload);
	switch (action.type) {
		case Types.GET_POST_SUCCESS:
			return {
				...state,
				items: action.payload.posts
			};
		case Types.GET_POST_ERROR:
			return {
				...state,
				error: action.payload.message
			};
		case Types.LIKE_POST_SUCCESS:
			return {
				...state,
				items: state.items.map(item =>
					item._id === action.payload.post._id ? action.payload.post : item
				),
			};
		case Types.LIKE_POST_ERROR:
			console.error(action.payload.message);
			return state;
		case Types.ADD_POST:
			return {
				items: [
					action.payload.post, 
					...state.items
				]
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
		payload: {
			message
		}
	}),
	likePostRequest: (_id) => ({
		type: Types.LIKE_POST_REQUEST,
		payload: {
			_id
		}
	}),
	likePostSuccess: post => ({
		type: Types.LIKE_POST_SUCCESS,
		payload: {
			post
		}
	}),
	likePostError: message => ({
		type: Types.LIKE_POST_ERROR,
		payload: {
			message
		}
	}),
	addPost: post => ({
		type: Types.ADD_POST,
		payload: {
			post
		}
	}),
};