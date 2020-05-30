import React from 'react';
import { Switch } from 'react-router-dom';
import PublicationRoutes from '@/pages/Publication/routes'

const PrivateRoutes = ({ session, routesSchema }) => {
  return (
    <Switch>
    <PublicationRoutes />
    </Switch>
  );
};

export default PrivateRoutes;
