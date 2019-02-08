import React, { Component } from 'react';
import { Container, Form, PostList } from './styles';
import api from '../../services/api';
import Post from './Post';
import Header from '../../components/Header';
class Timeline extends Component {
	state = {
		username: '',
		newPost: '',
		posts: []
	}

	async componentDidMount(){
		this.setState({ username: localStorage.getItem('@realtimeapp:username') });
		const response = await api.get('/post');
		this.setState({ posts: response.data });
	}

	handleOnInputChange = (event) => {
		this.setState({ newPost: event.target.value });
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const {newPost} = this.state;
		if (!newPost) return;
		
	}

	render() {
		const { posts } = this.state;
		return (
			<div>
				<Header />
				<Container>
					<Form onSubmit={this.handleSubmit}>
						<textarea placeholder="What's going on?" 
							maxLength={300} 
							value={this.state.newPost} 
							onChange={this.handleOnInputChange}
						/>
						<button type="submit">Share</button>
					</Form>

					<PostList>
						{posts.map(post => <Post key={post._id} post={post}></Post>)}
					</PostList>
				</Container>
			</div>
		);
	}
}

export default Timeline;