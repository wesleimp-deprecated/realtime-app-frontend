import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as PostActions } from "../ducks/post";

export function* getPosts() {
	try {
		const response = yield call(api.get, "/post");
		yield put(PostActions.getPostSuccess({ posts: response.data }));
	} catch {
		yield put(PostActions.getPostError({ message: "Error loading posts" }));
	}
}
