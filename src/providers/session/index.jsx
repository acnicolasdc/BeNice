import React, { useState, useLayoutEffect } from 'react';
import { getStorage, setStorage, deleteStorage } from '@/utils/localStorage';

export const SessionContext = React.createContext({
  session: false,
  deleteSession: () => {},
  createSession: () => {},
});

function SessionProvider({ children }) {
  const [session, setSession] = useState(false);

  useLayoutEffect(() => {
    //Manejemos la sesion asi
    //deleteSession();
    let userSession = getStorage('user-session-benice');
    if (userSession) {
      setSession(true);
    }
  }, [session]);

  const deleteSession = () => {
    deleteStorage('user-session-benice');
    setSession(false);
  };

  const createSession = (session) => {
    setStorage('user-session-benice', JSON.stringify(session));
    setSession(true);
  };

  return (
    <SessionContext.Provider value={{ session, createSession, deleteSession }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
