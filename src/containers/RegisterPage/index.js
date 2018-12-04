import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { authActions } from '../App/auth/actions';

const RegisterPage = ({ values, handleChange }) => (
  <div>
    <Helmet
      titleTemplate="Register"
      defaultTitle="Register"
    >
      <meta name="description" content="Register" />
    </Helmet>
    <h2>Register</h2>
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
        id="name"
        name="name"
        label="Your Name"
        type="text"
        value={values.name}
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
        <Button type="submit" color="secondary">Register</Button>
      </div>
    </Form>
  </div>
);

const RegisterPageFormik = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      name: '',
      password: ''
    };
  },
  handleSubmit(values, { props }) {
    props.register(values.email, values.name, values.password);
  }
})(RegisterPage);

const mapDispatchToProps = (dispatch) => ({
  register: (email, name, password) => dispatch(authActions.register(email, name, password))
});

export default connect(undefined, mapDispatchToProps)(RegisterPageFormik);
