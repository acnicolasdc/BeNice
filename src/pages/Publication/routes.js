import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from './CreatePublication';

const PublicationRoutes = () => {
  return (
    <Switch>
      <Route exact path="/Create" component={Create} />
    </Switch>
  );
};

export default PublicationRoutes;
