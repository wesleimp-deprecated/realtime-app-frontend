import React, { Component } from 'react';

import { Container, Form } from './styles';

class Login extends Component {
  render() {
    return (
      <Container>
        <Form>
          <input placeholder="username" />
          <button>Entrar</button>
        </Form>
      </Container>
    );
  }
}

export default Login;