import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { Creators as PostActions } from "../../store/ducks/post";
import { Container, Form, PostList } from "./styles";
import api from "../../services/api";
import Post from "./Post";
import Header from "../../components/Header";
import socket from "socket.io-client";

class Timeline extends Component {
	state = {
		newPost: "",
	};

	componentDidMount() {
		this.subscribeToEvents();
		this.props.getPostRequest();
	}

	handleOnInputChange = event => {
		this.setState({ newPost: event.target.value });
	};

	subscribeToEvents = () => {
		const io = socket("http://localhost:3001");

		io.on("newPost", data => {
			this.setState({ posts: [data, ...this.state.posts] });
		});

		io.on("likePost", data => {
			this.setState({
				posts: this.state.posts.map(post =>
					post._id === data._id ? data : post
				)
			});
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		const { newPost } = this.state;
		if (!newPost) return;
		const username = localStorage.getItem("@realtimeapp:username");

		api.post("/post", { author: username, content: newPost });

		this.setState({ newPost: "" });
	};

	render() {
		const { posts } = this.props;
		console.log(posts);
		return (
			<div>
				<Header />
				<Container>
					<Form onSubmit={this.handleSubmit}>
						<textarea
							placeholder="What's going on?"
							maxLength={300}
							value={this.state.newPost}
							onChange={this.handleOnInputChange}
						/>
						<button type="submit">Share</button>
					</Form>
					{
						
					}
					{/* <PostList>
						{posts.map(post => (
							<Post key={post._id} post={post} />
						))}
					</PostList> */}
				</Container>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	posts: state.items,
	error: state.error
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(PostActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Timeline);
