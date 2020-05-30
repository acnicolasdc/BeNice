import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from '@/containers/test';

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Test} />
    </Switch>
  );
};

export default AuthRoutes;
