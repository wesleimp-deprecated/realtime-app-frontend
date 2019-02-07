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

    console.log(this.state.username);
    this.setState({ username: '' });
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