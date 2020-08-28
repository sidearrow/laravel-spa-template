import React, { useEffect, useState } from 'react';
import { api } from '../api';

type AuthContextProps = {
  status: null | boolean;
  user: null;
};

export const AuthContext = React.createContext<AuthContextProps>({
  status: null,
  user: null,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [authContextProps, setAuthContextProps] = useState<AuthContextProps>({
    status: null,
    user: null,
  });

  /* eslint-disable */
  useEffect(() => {
    (async () => {
      const res = await api.checkLogin();
      setAuthContextProps({ ...authContextProps, ...{ status: res.isLogin } });
    })();
  }, []);

  return (
    <AuthContext.Provider value={authContextProps}>{children}</AuthContext.Provider>
  );
};
