import React from 'react';
import { Container } from './styles';
import like from '../../../images/like.svg'

const Post = ({ post }) => (
    <Container>
        <strong>{post.author}</strong>
        <p>{post.content}</p>
        <button type="button">
            <img src={like} alt="Like" />
            {post.likes}
        </button>
    </Container>
);

export default Post;
