import { all, takeLatest } from "redux-saga/effects";
import { Types as PostActions } from "../ducks/post";
import { getPosts, likePost } from "./post";

export default function* root() {
	return yield all([
		takeLatest(PostActions.GET_POST_REQUEST, getPosts),
		takeLatest(PostActions.LIKE_POST_REQUEST, likePost), 
	]);
}
