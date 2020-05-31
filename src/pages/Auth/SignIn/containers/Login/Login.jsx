import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '@/redux/duck/auth.duck';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import logo from '@/assets/images/logo.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Copyright from './components/Copyright';
import { useStyles } from './Login.style';

const SignIn = ({ onSuccess, onFailure }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({ user: false, password: false });
  const [dataUser, setData] = useState({ user: '', password: '' });
  const { root, image, paper, avatar, form, submit, title } = useStyles();
  const { fetching, error, success, data } = useSelector((state) => state.auth);
  useEffect(() => {
    if (success) onSuccess(data);
    if (error) onFailure();
  }, [success, error]);
  const handleError = (dataToSend) => {
    let inputErrors = {};
    let hasError = false;
    Object.keys(dataToSend).forEach((key) => {
      if (dataToSend[key] === '') {
        inputErrors[key] = true;
        hasError = true;
      }
    });
    setErrors(inputErrors);
    return hasError;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError = handleError(dataUser);
    if (hasError) return;
    dispatch(loginRequest(dataUser));
  };
  const handleOnChange = (e) => {
    setData({ ...dataUser, [e.target.name]: e.target.value });
  };
  return (
    <Grid container component="main" className={root}>
      <Grid item xs={false} sm={4} md={7} className={image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={paper}>
          <Avatar className={avatar} src={logo} />
          <Typography component="h1" variant="h5" className={title}>
            Welcome to Benice
          </Typography>
          <form className={form} noValidate>
            <TextField
              error={errors['user']}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="Email Address"
              name="user"
              autoComplete="user"
              autoFocus
              onChange={handleOnChange}
              value={dataUser.user}
            />
            <TextField
              error={errors['password']}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleOnChange}
              value={dataUser.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={submit}
              onClick={handleSubmit}
            >
              {fetching ? <CircularProgress /> : 'Sign In'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright title="Globan website" />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
