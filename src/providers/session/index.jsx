import React, { useState, useLayoutEffect } from 'react';
import { getStorage, setStorage, deleteStorage } from '@/utils/localStorage';

export const SessionContext = React.createContext({
  session: false,
  deleteSession: () => {},
  createSession: () => {},
  createNewUser:()=>{},
});

function SessionProvider({ children }) {
  const [session, setSession] = useState(false);

  useLayoutEffect(() => {
    let userSession = getStorage('user-session-benice');    
    console.log(userSession);
    if (userSession) {      
      setSession(true);
    }
  }, [session]);

  const deleteSession = () => {
    console.log('entro')
    deleteStorage('user-session-benice');
    setSession(false);
  };

  const createSession = (session) => {
    setStorage('user-session-benice', JSON.stringify(session));
    setSession(true);
  };

  const createNewUser = () => {
    console.log('entro')
    deleteStorage('user-session-benice');
    setSession(false);
  };

  return (
    <SessionContext.Provider value={{ session, createSession, deleteSession,createNewUser }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
