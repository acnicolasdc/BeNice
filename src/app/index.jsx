import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import SessionProvider from '@/providers/session';
import store from '@/redux';
import Router from './router';
import { MainContainer } from './styles';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SessionProvider>
          <MainContainer>
            <Router />
          </MainContainer>
      </SessionProvider>
    </ReduxProvider>
  );
};

export default App;
