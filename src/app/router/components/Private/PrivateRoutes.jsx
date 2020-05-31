import React from 'react';
import { Switch } from 'react-router-dom';
import DashBoardRoutes from '@/pages/Dashboard/routes';
import MenuBasicComponent from '@/components/Menu/MenuBasic';

import PublicationRoutes from '@/pages/Publication/routes'

const PrivateRoutes = ({ session, routesSchema }) => {
  return (
    <>
      <MenuBasicComponent />
      <Switch>
        <PublicationRoutes />
      </Switch>
    </>
  );
};

export default PrivateRoutes;
