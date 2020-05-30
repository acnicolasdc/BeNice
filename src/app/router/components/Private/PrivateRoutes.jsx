import React from 'react';
import { Switch } from 'react-router-dom';
import DashBoardRoutes from '@/pages/Dashboard/routes'
import MunuBasicComponent from '@/components/Menu/MenuBasic'

const PrivateRoutes = ({ session, routesSchema }) => {
  return (
    <div>
    <MunuBasicComponent/>
    <Switch>
    <DashBoardRoutes />
    </Switch>
    </div>    
  );
};

export default PrivateRoutes;
