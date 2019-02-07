import React, { Component } from 'react';
import { Container, Form } from './styles';

class Timeline extends Component {
	state = {
		newPost: '',
	}

	handleOnInputChange = (event) => {
		this.setState({ newPost: event.target.value });
	}

	handleSubmit = (event) => {
		event.preventDefault();
		alert(this.state.newPost);
	}

	render() {
		return ( 
			<Container>
				<Form onSubmit={this.handleSubmit}>
					<textarea placeholder="What's going on?" maxLength={300} value={this.state.newPost} onChange={this.handleOnInputChange} />
					<button type="submit">Share</button>
				</Form>
			</Container>
		);
	}
}

export default Timeline;