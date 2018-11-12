import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage/index';

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
    </Switch>
  </AppWrapper>
);
