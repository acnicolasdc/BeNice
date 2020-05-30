import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright = ({ title }) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Globhack '}
      <Link color="inherit" href="https://www.globant.com/">
        {title}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
