import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
    </Switch>
  );
};

export default AuthRoutes;
