import React, { useContext, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { SessionContext } from '@/providers/session';
import Login from './containers/Login';
import { useStyles } from './SignIn.style';

const SignIn = () => {
  const [open, setOpen] = useState(false);
  const { main } = useStyles();
  const { createSession } = useContext(SessionContext);
  const onSuccess = (data) => {
    createSession(data);
  };
  const onFailure = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className={main}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="error"
          onClose={handleClose}
        >
          User or Password wrong
        </MuiAlert>
      </Snackbar>
      <Login onSuccess={onSuccess} onFailure={onFailure} />
    </div>
  );
};

export default SignIn;
