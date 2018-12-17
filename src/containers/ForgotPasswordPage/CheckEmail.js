import React from 'react';
import { Helmet } from 'react-helmet';

export class CheckEmail extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="Check Email Page"
          defaultTitle="Check Email Page"
        >
          <meta name="description" content="Check Email Page" />
        </Helmet>
        <div>
          <p>Check Email Page</p>
        </div>
      </div>
    );
  }
}

export default CheckEmail;
