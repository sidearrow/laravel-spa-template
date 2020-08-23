import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './Login/LoginPage';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/aaa" exact>
        <div>aaa</div>
      </Route>
    </Switch>
  </BrowserRouter>
);
