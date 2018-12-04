import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

const ChangePasswordPage = ({ values, handleChange }) => (
  <div>
    <Helmet
      titleTemplate="Change Password Page"
      defaultTitle="Change Password Page"
    >
      <meta name="description" content="Change Password Page" />
    </Helmet>
    <PageHeading title="Change Password" />
    <Form>
      <TextField
        required
        id="oldPassword"
        name="oldPassword"
        label="Old password"
        type="password"
        value={values.oldPassword}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        required
        id="newPassword"
        name="newPassword"
        label="New password"
        type="password"
        value={values.newPassword}
        onChange={handleChange}
        margin="normal"
      />
      <div>
        <Button type="submit" color="secondary">Submit</Button>
      </div>
    </Form>
  </div>
);

const ChangePasswordPageFormik = withFormik({
  mapPropsToValues() {
    return {
      oldPassword: '',
      newPassword: ''
    };
  },
  handleSubmit(values, { props }) {
    props.changePassword(values.oldPassword, values.newPassword);
  }
})(ChangePasswordPage);

const mapDispatchToProps = (dispatch) => ({
  changePassword: (oldPassword, newPassword) => dispatch(authActions.changePassword(oldPassword, newPassword))
});

export default connect(undefined, mapDispatchToProps)(ChangePasswordPageFormik);
