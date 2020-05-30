import React from 'react';
import Login from './containers/Login';
import { useStyles } from './SignIn.style';

const SignIn = () => {
  const { main } = useStyles();
  return (
    <div className={main}>
      <Login />
    </div>
  );
};

export default SignIn;
