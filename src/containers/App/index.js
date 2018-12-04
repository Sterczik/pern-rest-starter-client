import React from 'react';
import { Helmet } from 'react-helmet';
import { Normalize } from 'styled-normalize';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// Home
import HomePage from '../HomePage/index';

// Auth
import RegisterPage from '../RegisterPage/index';
import LoginPage from '../LoginPage/index';
import RegisterConfirmPage from '../RegisterConfirmPage/index';

// Account
import AccountPage from '../AccountPage/index';
import ChangePasswordPage from '../ChangePasswordPage/index';

// Todos
import TodosPage from '../TodosPage/index';

// Others
import NotFoundPage from '../NotFoundPage/index';

export default () => (
  <React.Fragment>
    <Normalize />
    <div>
      <Helmet
        titleTemplate="App"
        defaultTitle="App"
      >
        <meta name="description" content="App" />
      </Helmet>
      <Switch>
        <PublicRoute
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
          path="/my-account"
          component={AccountPage}
        />
        <PrivateRoute
          path="/change-password"
          component={ChangePasswordPage}
        />
        <PrivateRoute
          path="/todos"
          component={TodosPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </React.Fragment>
);
