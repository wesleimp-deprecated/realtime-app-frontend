import React, { Component } from 'react';

import { Container, Form } from './styles';

class Login extends Component {

  state = {
    username: ''
  }

  handleOnInputChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const {username} = this.state;
    if (!username) return;
    this.props.history.push('/timeline');

  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleOnSubmit}>
          <input placeholder="username" onChange={this.handleOnInputChange} value={this.state.username} />
          <button type="submit">Entrar</button>
        </Form>
      </Container>
    );
  }
}

export default Login;