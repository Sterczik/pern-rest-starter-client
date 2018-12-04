import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { authActions } from '../App/auth/actions';

const LoginPage = ({ values, handleChange }) => (
  <div>
    <Helmet
      titleTemplate="Login"
      defaultTitle="Login"
    >
      <meta name="description" content="Login" />
    </Helmet>
    <Form>
      <TextField
        required
        id="email"
        name="email"
        label="Email"
        type="email"
        value={values.email}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        required
        id="password"
        name="password"
        label="Password"
        type="password"
        value={values.password}
        onChange={handleChange}
        margin="normal"
      />
      <div>
        <Button type="submit" color="secondary">Login</Button>
      </div>
    </Form>
  </div>
);

const LoginPageFormik = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      password: ''
    };
  },
  handleSubmit(values, { props }) {
    props.login(values.email, values.password);
  }
})(LoginPage);

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(authActions.login(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPageFormik);
