import React, { useContext } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import { LoginPage } from './pages/login/LoginPage';
import { AuthContext } from './providers/AuthProvider';

const LoginRoute: React.FC<RouteProps> = (props) => {
  const status = useContext(AuthContext).status;
  if (status === null) {
    return <></>;
  }
  if (status) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const status = useContext(AuthContext).status;
  if (status === null) {
    return <></>;
  }
  if (status) {
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
};

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <LoginRoute path="/login" exact>
        <LoginPage />
      </LoginRoute>
      <PrivateRoute path="/" exact>
        <div>aaa</div>
      </PrivateRoute>
    </Switch>
  </BrowserRouter>
);
