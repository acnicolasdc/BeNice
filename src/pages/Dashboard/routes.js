import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

const DashboardRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default DashboardRoutes;
