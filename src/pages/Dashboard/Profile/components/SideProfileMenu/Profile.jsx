import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './Profile.styles'
import logo from '@/assets/images/logo.png';
import Paper from '@material-ui/core/Paper';

export default ({onClick, firstName, lastName, username,  password }) => {
  const classes = useStyles();

  const [dataUser, setData] = useState({ firstName, lastName, username,  password });

  const handleOnChange = (e) => {
    setData({ ...dataUser, [e.target.name]: e.target.value });
  };

  return (
    <Paper className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt="Ted talk" src={logo} />
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"              
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={dataUser.firstName}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField              
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={dataUser.lastName}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField              
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={dataUser.username}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField              
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={dataUser.password}
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => onClick()}
          >
            Update
          </Button>
        </form>
      </div>
    </Paper>
  );
}