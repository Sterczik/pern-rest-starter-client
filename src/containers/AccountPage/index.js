import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../../containers/App/auth/actions';

export const AccountPage = ({ logout }) => (
  <React.Fragment>
    <h2>My Account</h2>
    <Link to="/change-password">Change Password</Link>
    <button type="button" onClick={logout}>Logout</button>
  </React.Fragment>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout())
});

export default connect(undefined, mapDispatchToProps)(AccountPage);
