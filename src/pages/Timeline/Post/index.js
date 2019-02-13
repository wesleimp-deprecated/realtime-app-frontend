import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PostTypes } from '../../../store/ducks/post';
import { Container } from './styles';
import like from '../../../images/like.svg'
//import api from '../../../services/api';

class Post extends Component {

	handleLike = () => {
		const { _id } = this.props.post;
		this.props.likePostRequest(_id)
		//api.post(`/post/${_id}/like`);
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

const mapStateToProps = (state) => ({
	posts: state.items
});

const mapDispatchToProps = (dispatch) => 
	bindActionCreators(PostTypes, dispatch)

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Post);
