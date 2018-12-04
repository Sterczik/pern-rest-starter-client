import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const PageHeading = ({ title, subtitle }) => (
  <HeadingWrapper>
    <Typography variant="display2" color="inherit">
      { title }
    </Typography>
    { subtitle ? (
      <Typography variant="subheading" color="inherit">
        { subtitle }
      </Typography>
    ) : null }
  </HeadingWrapper>
);

const HeadingWrapper = styled.div`
  padding: 15px
`;

export default PageHeading;
