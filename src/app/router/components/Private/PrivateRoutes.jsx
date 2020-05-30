import React from 'react';
import { Switch } from 'react-router-dom';
import DashboardRoutes from '@/pages/Dashboard/routes';

const PrivateRoutes = ({ session, routesSchema }) => {
  return (
    <Switch>
      <DashboardRoutes />
    </Switch>
  );
};

export default PrivateRoutes;
