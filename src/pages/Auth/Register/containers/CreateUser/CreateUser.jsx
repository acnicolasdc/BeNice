import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserRequest } from '@/redux/duck/createUser.duck';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '@/assets/images/logo.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './Create.style';
import { withRouter } from 'react-router'
import PropTypes from "prop-types";

const Register = ({ onSuccess, onFailure ,history}) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({ nombre: false, userName: false, correo: false, password: false });
  const [dataUser, setData] = useState({ nombre: '', userName: '', correo: '', password: '' });
  const { root, image, paper, avatar, form, submit, title } = useStyles();
  const { fetching, error, success, data } = useSelector((state) => state.createUser);

  useEffect(() => {
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
    dispatch(createUserRequest(dataUser));
    history.push('/');
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
            Register
          </Typography>
          <form className={form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="nombre"
                name="nombre"
                variant="outlined"
                required
                fullWidth
                id="nombre"
                label="Full Name"
                autoFocus
                onChange={handleOnChange}
                error={errors['nombre']}
                margin="normal"
                value={dataUser.nombre}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="userName"
                onChange={handleOnChange}
                error={errors['userName']}
                margin="normal"
                value={dataUser.userName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="correo"
                label="Email Address"
                name="correo"
                autoComplete="correo"
                onChange={handleOnChange}
                error={errors['correo']}
                margin="normal"
                value={dataUser.correo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleOnChange}
                error={errors['password']}
                margin="normal"
                value={dataUser.password}
              />
            </Grid>
          </Grid>
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={submit}
              onClick={ handleSubmit}
            >
              {fetching ? <CircularProgress /> : 'Sign In'}
            </Button>
          </form>
        </div>
      </Grid>
    </Grid> 
  );
};

export default withRouter(Register);
