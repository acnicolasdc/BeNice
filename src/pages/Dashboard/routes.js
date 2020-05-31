import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ProfileContainer from '@/pages/Dashboard/Profile/containers/Profile';
import CreatePublicationContainer from '@/pages/Dashboard/Publication/CreatePublication';
const DashboardRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Profile" component={ProfileContainer} />
      <Route path="/CreatePublication" component={CreatePublicationContainer} />
    </Switch>
  );
};

export default DashboardRoutes;
