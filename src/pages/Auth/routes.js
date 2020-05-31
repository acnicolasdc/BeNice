import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Register from './Register';

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/Register" component={Register} />
    </Switch>
  );
};

export default AuthRoutes;
