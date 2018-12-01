import React from 'react';
import { Helmet } from 'react-helmet';

export class RegisterConfirmPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="Register Confirm Page"
          defaultTitle="Register Confirm Page"
        >
          <meta name="description" content="Register Confirm Page" />
        </Helmet>
        <div>
          <p>Register Confirm Page</p>
        </div>
      </div>
    );
  }
}

export default RegisterConfirmPage;
