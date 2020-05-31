import React from 'react';
import { Switch } from 'react-router-dom';
import DashBoardRoutes from '@/pages/Dashboard/routes';
import MenuBasicComponent from '@/components/Menu/MenuBasic';

const PrivateRoutes = ({ session, routesSchema }) => {
  return (
    <>
      <MenuBasicComponent />
      <Switch>
        <DashBoardRoutes />
      </Switch>
    </>
  );
};

export default PrivateRoutes;
