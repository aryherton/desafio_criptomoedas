import React from 'react';

import LoginForm from '../../components/formLogin/LoginForm';
import StyleLoginWrapper from './styleLogin';

function Login() {
  return (
    <StyleLoginWrapper>
      <LoginForm />
    </StyleLoginWrapper>
  );
}

export default Login;