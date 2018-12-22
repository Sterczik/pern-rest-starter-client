import React from 'react';
import { Helmet } from 'react-helmet';

import PageHeading from '../../components/PageHeading/PageHeading';

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
        <PageHeading title="Home Page" />
      </div>
    );
  }
}

export default HomePage;
