import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => (
      isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    )}
  />
);

const mapStateToProps = () => ({
  isAuthenticated: !!localStorage.getItem('token')
});

export default connect(mapStateToProps)(PrivateRoute);
