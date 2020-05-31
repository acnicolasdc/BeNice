import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ProfileContainer from '@/pages/Dashboard/Profile/containers/Profile';

const DashboardRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profileeee" component={ProfileContainer} />
      <Route exact path="/Profile" component={ProfileContainer} />
    </Switch>
  );
};

export default DashboardRoutes;
