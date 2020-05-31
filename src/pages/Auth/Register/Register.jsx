import React, { useContext, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { SessionContext } from '@/providers/session';
import CreateUser from './containers/CreateUser';
import { useStyles } from './Register.style';

const Register = () => {
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
      <CreateUser onSuccess={onSuccess} onFailure={onFailure} />
    </div>
  );
};

export default Register;
