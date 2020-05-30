import React from 'react';
import { Switch } from 'react-router-dom';
import AuthRoutes from '@/pages/Auth/routes'

const PublicRoutes = ({ session, routesSchema }) => {
  return (
    <Switch>
    <AuthRoutes />
    </Switch>
  );
};

export default PublicRoutes;
