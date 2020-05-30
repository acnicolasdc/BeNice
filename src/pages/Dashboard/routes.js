import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileContainer from '@/pages/Dashboard/Profile/containers/Profile';

const DashboardRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProfileContainer} />
      <Route exact path="/Profile" component={ProfileContainer} />
    </Switch>
  );
};

export default DashboardRoutes;
