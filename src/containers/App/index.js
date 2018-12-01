import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import HomePage from '../HomePage/index';
import TodosPage from '../TodosPage/index';
import RegisterPage from '../RegisterPage/index';
import LoginPage from '../LoginPage/index';
import NotFoundPage from '../NotFoundPage/index';
import RegisterConfirmPage from '../RegisterConfirmPage/index';

const AppWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
`;

export default () => (
  <AppWrapper>
    <Helmet
      titleTemplate="App"
      defaultTitle="App"
    >
      <meta name="description" content="App" />
    </Helmet>
    <Switch>
      <Route
        exact
        path="/"
        component={HomePage}
      />
      <PublicRoute
        path="/register"
        component={RegisterPage}
      />
      <PublicRoute
        path="/register-confirm"
        component={RegisterConfirmPage}
      />
      <PublicRoute
        path="/login"
        component={LoginPage}
      />
      <PrivateRoute
        path="/todos"
        component={TodosPage}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </AppWrapper>
);
