import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

const ForgotPasswordPage = ({ values, handleChange }) => (
  <div>
    <Helmet
      titleTemplate="Forgot Password Page"
      defaultTitle="Forgot Password Page"
    >
      <meta name="description" content="Forgot Password Page" />
    </Helmet>
    <PageHeading title="Forgot Password" />
    <Form>
      <TextField
        required
        id="email"
        name="email"
        label="Your email"
        type="email"
        value={values.email}
        onChange={handleChange}
        margin="normal"
      />
      <div>
        <Button type="submit" color="secondary">Submit</Button>
      </div>
    </Form>
  </div>
);

const ForgotPasswordPageFormik = withFormik({
  mapPropsToValues() {
    return {
      email: ''
    };
  },
  handleSubmit(values, { props }) {
    props.forgotPassword(values.email);
  }
})(ForgotPasswordPage);

const mapDispatchToProps = (dispatch) => ({
  forgotPassword: (email) => dispatch(authActions.forgotPassword(email))
});

export default connect(undefined, mapDispatchToProps)(ForgotPasswordPageFormik);
