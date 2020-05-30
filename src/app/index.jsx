import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import SessionProvider from '@/providers/session';
import ThemeProvider from '@/providers/theme';
import store from '@/redux';
import Router from './router';
import { MainContainer } from './styles';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SessionProvider>
      <ThemeProvider>
          <MainContainer>
            <Router />
          </MainContainer>
          </ThemeProvider>
      </SessionProvider>
    </ReduxProvider>
  );
};

export default App;
