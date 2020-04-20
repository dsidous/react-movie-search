import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import SignInFacebook from '../../molecules/SignInFacebook';
import SignInForm from '../../molecules/SignInForm';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(5, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const SignInPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <Typography variant="h4">Log in</Typography>
        <Typography paragraph variant="body2">
          To your watchlist.
        </Typography>
        <SignInFacebook />
        <SignInForm />
      </Paper>
    </Container>
  );
};
export default SignInPage;
