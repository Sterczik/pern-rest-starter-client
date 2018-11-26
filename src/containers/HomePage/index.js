import React from 'react';
import { Helmet } from 'react-helmet';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="Home Page"
          defaultTitle="Home Page"
        >
          <meta name="description" content="Home Page" />
        </Helmet>
        <div>
          <p>Home Page</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
