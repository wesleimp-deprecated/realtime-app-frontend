import React, { Component } from 'react';
import { Container } from './styles';
import like from '../../../images/like.svg'
import api from '../../../services/api';

class Post extends Component {

	handleLike = () => {
		const { _id } = this.props.post;
		api.post(`/post/${_id}/like`);
	}

  render() {
		const { post } = this.props;
    return (
			<Container>
				<strong>{post.author}</strong>
				<p>{post.content}</p>
					<button type="button" onClick={this.handleLike}>
							<img src={like} alt="Like" />
							{post.likes}
					</button>
			</Container>
		);
  }
}

export default Post;
