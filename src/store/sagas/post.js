import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as PostActions } from "../ducks/post";

// Get Post
export function* getPosts() {
	try {
		const response = yield call(api.get, "/post");
		yield put(PostActions.getPostSuccess({ posts: response.data }));
	} catch {
		yield put(PostActions.getPostError({ message: "Error loading posts" }));
	}
}

// Like post
export function* likePost(action) {
	try {
		const { _id } = action.payload;
		yield call(api.post, `/post/${_id}/like`, {});
	} catch {
		yield put(PostActions.likePostError({ message: "Error loading posts" }));
	}
}