import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

export const AccountPage = ({ logout }) => (
  <React.Fragment>
    <PageHeading title="My Account" />
    <Link to="/change-password">Change Password</Link>
    <Button type="button" onClick={logout} color="primary">Logout</Button>
  </React.Fragment>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout())
});

export default connect(undefined, mapDispatchToProps)(AccountPage);
