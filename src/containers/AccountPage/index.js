import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

export const AccountPage = ({ logout }) => (
  <React.Fragment>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <PageHeading title="My Account" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link to="/change-password">Change Password</Link>
        <Button type="button" onClick={logout} color="primary">Logout</Button>
      </Grid>
    </Grid>
  </React.Fragment>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout())
});

export default connect(undefined, mapDispatchToProps)(AccountPage);
